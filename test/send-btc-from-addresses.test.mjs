import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import * as grpc from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import Bisq from '../lib/bisq.mjs'

const definition = grpc.loadPackageDefinition(loadSync(
  fileURLToPath(new URL('../proto/grpc_services.proto', import.meta.url)),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true },
)).io.bisq.protobuffer.Wallets.service

const request = { address: 'destination', amount: '0.02', tx_fee_rate: '10', memo: 'test memo' }
const reply = { tx_info: { tx_id: 'fixture-transaction' } }

async function walletServer(t, handlers, legacyOnly = false) {
  const server = new grpc.Server()
  server.addService(legacyOnly ? { SendBtc: definition.SendBtc } : definition, handlers)
  t.after(() => server.forceShutdown())
  const port = await new Promise((resolve, reject) => {
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (error, port) => {
      if (error) reject(error)
      else resolve(port)
    })
  })
  return new Bisq({ ipAddress: `127.0.0.1:${port}`, password: 'fixture-password' })
}

test('restricted RPC uses a dedicated request and retains the legacy wire contract', () => {
  const fields = (method) => definition[method].requestType.type.field.map(({ name, number, label }) => ({ name, number, label }))
  const legacy = [
    { name: 'address', number: 1, label: 'LABEL_OPTIONAL' },
    { name: 'amount', number: 2, label: 'LABEL_OPTIONAL' },
    { name: 'tx_fee_rate', number: 3, label: 'LABEL_OPTIONAL' },
    { name: 'memo', number: 4, label: 'LABEL_OPTIONAL' },
  ]
  assert.deepEqual(fields('SendBtc'), legacy)
  assert.deepEqual(fields('SendBtcFromAddresses'), [
    ...legacy, { name: 'source_addresses', number: 5, label: 'LABEL_REPEATED' },
  ])
  assert.equal(definition.SendBtcFromAddresses.path, '/io.bisq.protobuffer.Wallets/SendBtcFromAddresses')
  assert.deepEqual(definition.SendBtcFromAddresses.responseType.type, definition.SendBtc.responseType.type)
})

test('restricted RPC forwards one or multiple sources, duplicates, fee-inclusive amount, memo and authentication', async (t) => {
  const received = []
  let legacyCalls = 0
  const bisq = await walletServer(t, {
    SendBtcFromAddresses: (call, callback) => {
      received.push({ request: call.request, password: call.metadata.get('password') })
      callback(null, reply)
    },
    SendBtc: (call, callback) => { legacyCalls++; callback(null, reply) },
  })
  for (const sources of [['A'], ['A', 'B'], ['A', 'A']]) {
    const result = await bisq.wallets.sendBtcFromAddresses({ ...request, source_addresses: sources })
    assert.equal(result.tx_info.tx_id, reply.tx_info.tx_id)
    // Memo metadata may be absent from an immediate daemon reply.
    assert.equal(result.tx_info.memo, '')
    assert.deepEqual(received.at(-1), {
      request: { ...request, source_addresses: sources }, password: ['fixture-password'],
    })
  }
  await bisq.wallets.sendBtcFromAddresses({ address: request.address, amount: request.amount, source_addresses: ['A'] })
  assert.deepEqual(received.at(-1).request, { ...request, tx_fee_rate: '', memo: '', source_addresses: ['A'] })
  assert.equal(legacyCalls, 0)
})

test('missing, empty and invalid sources reach the daemon unchanged and its INVALID_ARGUMENT is propagated', async (t) => {
  const received = []
  let legacyCalls = 0
  const bisq = await walletServer(t, {
    SendBtcFromAddresses: (call, callback) => {
      received.push(call.request.source_addresses)
      callback({ code: grpc.status.INVALID_ARGUMENT, details: 'fixture source validation failure' })
    },
    SendBtc: (call, callback) => { legacyCalls++; callback(null, reply) },
  })
  for (const sources of [undefined, [], ['A', ''], ['A', '   '], ['unknown'], ['A', 'excluded']]) {
    const parameters = { ...request }
    if (sources !== undefined) parameters.source_addresses = sources
    await assert.rejects(bisq.wallets.sendBtcFromAddresses(parameters), {
      code: grpc.status.INVALID_ARGUMENT, details: 'fixture source validation failure',
    })
    assert.deepEqual(received.at(-1), sources ?? [])
  }
  assert.equal(received.length, 6)
  assert.equal(legacyCalls, 0)
})

test('supported RPC surfaces failures with status, details and metadata without calling SendBtc', async (t) => {
  let legacyCalls = 0
  const received = []
  let failure
  const bisq = await walletServer(t, {
    SendBtcFromAddresses: (call, callback) => {
      received.push(call.request)
      const metadata = new grpc.Metadata()
      metadata.set('fixture-error', 'preserved')
      callback({ ...failure, metadata })
    },
    SendBtc: (call, callback) => { legacyCalls++; callback(null, reply) },
  })
  for (const [code, details] of [
    [grpc.status.UNIMPLEMENTED, 'unsupported'],
    [grpc.status.INVALID_ARGUMENT, 'invalid source address'],
    [grpc.status.UNAVAILABLE, 'cannot send btc due to insufficient funds'],
    [grpc.status.DEADLINE_EXCEEDED, 'timeout'],
    [grpc.status.CANCELLED, 'cancelled'],
    [grpc.status.INTERNAL, 'internal failure'],
  ]) {
    failure = { code, details }
    await assert.rejects(bisq.wallets.sendBtcFromAddresses({ ...request, source_addresses: ['A'] }), (error) => {
      assert.equal(error.code, code)
      assert.equal(error.details, details)
      assert.deepEqual(error.metadata.get('fixture-error'), ['preserved'])
      return true
    })
  }
  assert.equal(received.length, 6)
  assert.ok(received.every(({ source_addresses }) => source_addresses.length === 1 && source_addresses[0] === 'A'))
  assert.equal(legacyCalls, 0)
})

test('legacy-only daemon returns UNIMPLEMENTED for restricted RPC and ordinary SendBtc still works', async (t) => {
  const received = []
  const bisq = await walletServer(t, {
    SendBtc: (call, callback) => { received.push(call.request); callback(null, reply) },
  }, true)
  await assert.rejects(bisq.wallets.sendBtcFromAddresses({ ...request, source_addresses: ['A'] }), { code: grpc.status.UNIMPLEMENTED })
  assert.equal(received.length, 0)
  const result = await bisq.wallets.sendBtc(request)
  assert.equal(result.tx_info.tx_id, reply.tx_info.tx_id)
  assert.deepEqual(received, [request])
})

test('parameter names remain strict and source_addresses cannot be added to legacy SendBtc', () => {
  const bisq = new Bisq({ ipAddress: '127.0.0.1:1', password: 'test' })
  assert.throws(() => bisq.wallets.sendBtc({ ...request, source_addresses: ['A'] }), /Unexpected parameters.*source_addresses/)
  assert.throws(() => bisq.wallets.sendBtcFromAddresses({ ...request, sourceAddresses: ['A'] }), /Unexpected parameters.*sourceAddresses/)
})
