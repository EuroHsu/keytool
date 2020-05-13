const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'info'] })
const bitcoin = require('bitcoinjs-lib')

const network = Object.prototype.hasOwnProperty.call(argv, 'test') ? bitcoin.networks.testnet : bitcoin.networks.bitcoin
const info = Object.prototype.hasOwnProperty.call(argv, 'info')
const keyPair = bitcoin.ECPair.makeRandom({ network })
if (info) {
  console.log('Private Key:', keyPair.toWIF())
  console.log('Public Key:', keyPair.publicKey.toString('hex'))
  console.log('P2PKH Address:', bitcoin.payments.p2pkh({ network, pubkey: keyPair.publicKey }).address)
  const p2wpkh = bitcoin.payments.p2wpkh({pubkey: keyPair.publicKey, network})
  const p2sh = bitcoin.payments.p2sh({redeem: p2wpkh, network})
  console.log('Redeem script:', p2sh.redeem.output.toString('hex'))
  console.log('P2SH Address:', p2sh.address)
} else {
  console.log(keyPair.toWIF())
}
