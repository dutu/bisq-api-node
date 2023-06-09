import Bisq from "../lib/bisq.mjs";

const bisq = new Bisq({ ipAddress: '192.168.1.230:9998', password: '' })
let result  = await bisq.price.getMarketPrice({ currency_code: 'usd' })
console.log(result)

result  = await bisq.getVersion.getVersion()
console.log(result)

result  = await bisq.offers.getOffers({ direction: 'BUY', currency_code: 'xmr'})
console.log(result)

result  = await bisq.trades.getTrades({ category: 1 })
console.log(result)
