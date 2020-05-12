const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'key'] })
const bitcoin = require('bitcoinjs-lib')

const network = Object.prototype.hasOwnProperty.call(argv, 'test') ? bitcoin.networks.testnet : bitcoin.networks.bitcoin
const privKey = argv.key
const keyPair = new bitcoin.ECPair.fromWIF(privKey, network)
console.log(bitcoin.payments.p2pkh({ network, pubkey: keyPair.publicKey }).address)
