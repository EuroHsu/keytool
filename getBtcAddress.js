const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'key', 'p2sh'] })
const bitcoin = require('bitcoinjs-lib')
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
const ask = question => new Promise(resolve => rl.question(question, resolve))

const network = Object.prototype.hasOwnProperty.call(argv, 'test') ? bitcoin.networks.testnet : bitcoin.networks.bitcoin
const p2sh = Object.prototype.hasOwnProperty.call(argv, 'p2sh')
let privKey = argv.key
const init = async () => {
  if (!privKey) privKey = await ask('請輸入私鑰: ')
  const keyPair = new bitcoin.ECPair.fromWIF(privKey, network)
  if (p2sh) {
    const p2wpkh = bitcoin.payments.p2wpkh({pubkey: keyPair.publicKey, network})
    console.log(bitcoin.payments.p2sh({redeem: p2wpkh, network}).address)
  } else {
    console.log(bitcoin.payments.p2pkh({ network, pubkey: keyPair.publicKey }).address)
  }
  process.exit(0)
}

init()
