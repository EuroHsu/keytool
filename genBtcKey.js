const bitcoin = require('bitcoinjs-lib')

const keyPair = bitcoin.ECPair.makeRandom()
console.log("Private Key:", keyPair.toWIF())
console.log("Public Key:", keyPair.publicKey.toString('hex'))
console.log("Address:", bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address)
