const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'key', 'p2sh', 'bech32'] })
const bitcoin = require('bitcoinjs-lib')
const Bech32 = require('bech32')
const crypto = require('crypto')
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
const ask = question => new Promise(resolve => rl.question(question, resolve))

const test = Object.prototype.hasOwnProperty.call(argv, 'test')
const network = test ? bitcoin.networks.testnet : bitcoin.networks.bitcoin
const p2sh = Object.prototype.hasOwnProperty.call(argv, 'p2sh')
const bech32 = Object.prototype.hasOwnProperty.call(argv, 'bech32')
let privKey = argv.key
const init = async () => {
  if (!privKey) privKey = await ask('請輸入私鑰: ')
  const keyPair = new bitcoin.ECPair.fromWIF(privKey, network)
  if (bech32) {
    const hash256 = crypto.createHash('sha256').update(keyPair.publicKey).digest()
    const hash160 = crypto.createHash('ripemd160').update(hash256).digest()
    const words = Bech32.toWords(hash160)
    words.unshift(0)
    const encode = test ? 'tb' : 'bc'
    console.log(Bech32.encode(encode, words))
  } else if (p2sh) {
    const p2wpkh = bitcoin.payments.p2wpkh({pubkey: keyPair.publicKey, network})
    console.log(bitcoin.payments.p2sh({redeem: p2wpkh, network}).address)
  } else {
    console.log(bitcoin.payments.p2pkh({ network, pubkey: keyPair.publicKey }).address)
  }
  process.exit(0)
}

init()
