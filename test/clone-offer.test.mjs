import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import * as grpc from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import Bisq from '../lib/bisq.mjs'

const definition = grpc.loadPackageDefinition(loadSync(
  fileURLToPath(new URL('../proto/grpc_services.proto', import.meta.url)),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true },
)).io.bisq.protobuffer.Offers.service

const overrides = ['price', 'use_market_based_price', 'market_price_margin_pct', 'trigger_price', 'payment_account_id']
const reply = { offer: { id: 'cloned-offer', is_activated: false, trigger_price: '0', is_my_pending_offer: false } }

async function offerServer(t, handlers, legacyOnly = false) {
  const server = new grpc.Server()
  server.addService(legacyOnly ? { CreateOffer: definition.CreateOffer } : definition, handlers)
  t.after(() => server.forceShutdown())
  const port = await new Promise((resolve, reject) => {
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (error, port) => {
      if (error) reject(error)
      else resolve(port)
    })
  })
  return new Bisq({ ipAddress: `127.0.0.1:${port}`, password: 'fixture-password' })
}

test('clone RPC has the daemon field numbers, types and optional presence', () => {
  const fields = definition.CloneOffer.requestType.type.field
  assert.deepEqual(fields.map(({ name, number, type }) => ({ name, number, type })), [
    { name: 'source_offer_id', number: 1, type: 'TYPE_STRING' },
    { name: 'price', number: 2, type: 'TYPE_STRING' },
    { name: 'use_market_based_price', number: 3, type: 'TYPE_BOOL' },
    { name: 'market_price_margin_pct', number: 4, type: 'TYPE_DOUBLE' },
    { name: 'trigger_price', number: 5, type: 'TYPE_STRING' },
    { name: 'payment_account_id', number: 6, type: 'TYPE_STRING' },
  ])
  // proto-loader represents proto3 optional fields as synthetic oneofs.
  assert.deepEqual(definition.CloneOffer.requestType.type.oneofDecl.map(({ name }) => name),
    overrides.map((name) => `_${name}`))
  assert.deepEqual(fields.slice(1).map(({ oneofIndex }) => oneofIndex), [0, 1, 2, 3, 4])
  assert.equal(definition.CloneOffer.path, '/io.bisq.protobuffer.Offers/CloneOffer')
  assert.equal(definition.CloneOffer.responseType.type.name, 'CloneOfferReply')
  assert.deepEqual(definition.CloneOffer.responseType.type.field, definition.CreateOffer.responseType.type.field)
})

test('clone RPC preserves omitted overrides, explicit false/zero, authentication and placed offer reply', async (t) => {
  const received = []
  let createCalls = 0
  const bisq = await offerServer(t, {
    CloneOffer: (call, callback) => {
      received.push(call.request)
      assert.deepEqual(call.metadata.get('password'), ['fixture-password'])
      callback(null, reply)
    },
    CreateOffer: (call, callback) => { createCalls++; callback(null, reply) },
  })
  for (const parameters of [
    { source_offer_id: 'source' },
    { source_offer_id: 'source', use_market_based_price: false, price: '45000', trigger_price: '0' },
    { source_offer_id: 'source', use_market_based_price: true, market_price_margin_pct: 0, trigger_price: '0', payment_account_id: 'replacement' },
    { source_offer_id: 'source', market_price_margin_pct: 2.5 },
    // Invalid empty overrides must still reach daemon validation as present fields.
    { source_offer_id: 'source', price: '', payment_account_id: '' },
  ]) {
    const original = structuredClone(parameters)
    const { offer } = await bisq.offers.cloneOffer(parameters)
    assert.equal(offer.id, reply.offer.id)
    assert.equal(offer.is_activated, false)
    assert.equal(offer.trigger_price, '0')
    assert.equal(offer.is_my_pending_offer, false)
    const request = received.at(-1)
    assert.equal(request.source_offer_id, parameters.source_offer_id)
    for (const field of overrides) {
      assert.equal(Object.hasOwn(request, field), Object.hasOwn(parameters, field), `${field} presence`)
      if (Object.hasOwn(parameters, field)) assert.equal(request[field], parameters[field])
    }
    // Serialization must not add defaults to the caller's object.
    assert.deepEqual(parameters, original)
  }
  assert.equal(createCalls, 0)
})

test('daemon validation and placement errors retain status, details and metadata without creating another offer', async (t) => {
  let createCalls = 0
  const received = []
  let failure
  const bisq = await offerServer(t, {
    CloneOffer: (call, callback) => {
      received.push(call.request)
      const metadata = new grpc.Metadata()
      metadata.set('fixture-error', 'preserved')
      callback({ ...failure, metadata })
    },
    CreateOffer: (call, callback) => { createCalls++; callback(null, reply) },
  })
  for (const [code, details] of [
    [grpc.status.NOT_FOUND, 'source offer not found'],
    [grpc.status.INVALID_ARGUMENT, 'invalid clone override'],
    [grpc.status.UNAVAILABLE, 'market price unavailable'],
    [grpc.status.UNIMPLEMENTED, 'unsupported'],
    [grpc.status.DEADLINE_EXCEEDED, 'timeout'],
    [grpc.status.INTERNAL, 'placement failure'],
  ]) {
    failure = { code, details }
    await assert.rejects(bisq.offers.cloneOffer({ source_offer_id: 'source' }), (error) => {
      assert.equal(error.code, code)
      assert.equal(error.details, details)
      assert.deepEqual(error.metadata.get('fixture-error'), ['preserved'])
      return true
    })
  }
  assert.equal(received.length, 6)
  assert.equal(createCalls, 0)
})

test('legacy-only daemon returns UNIMPLEMENTED for cloning and CreateOffer still works', async (t) => {
  let createCalls = 0
  const bisq = await offerServer(t, {
    CreateOffer: (call, callback) => { createCalls++; callback(null, reply) },
  }, true)
  await assert.rejects(bisq.offers.cloneOffer({ source_offer_id: 'source' }), { code: grpc.status.UNIMPLEMENTED })
  assert.equal(createCalls, 0)
  assert.equal((await bisq.offers.createOffer({ currency_code: 'USD' })).offer.id, reply.offer.id)
  assert.equal(createCalls, 1)
})

test('clone parameter names remain strict and overrides cannot leak into other offer methods', () => {
  const bisq = new Bisq({ ipAddress: '127.0.0.1:1', password: 'test' })
  assert.throws(() => bisq.offers.cloneOffer({ sourceOfferId: 'source' }), /Unexpected parameters.*sourceOfferId/)
  assert.throws(() => bisq.offers.cloneOffer({ source_offer_id: 'source', enable: 1 }), /Unexpected parameters.*enable/)
  assert.throws(() => bisq.offers.createOffer({ source_offer_id: 'source' }), /Unexpected parameters.*source_offer_id/)
})
