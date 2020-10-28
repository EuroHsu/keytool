const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'info'] })
const bip32 = require('bip32')
const bip39 = require('bip39')
const bech32 = require('bech32')
const bitcoin = require('bitcoinjs-lib')
const crypto = require('crypto')
const hdkey = require('ethereumjs-wallet/hdkey')
const util = require('ethereumjs-util')

const test = Object.prototype.hasOwnProperty.call(argv, 'test')
const network = test ? bitcoin.networks.testnet : bitcoin.networks.bitcoin
const info = Object.prototype.hasOwnProperty.call(argv, 'info')
const mnemonic = bip39.generateMnemonic()

if (info) {
  console.log('Mnemonic:', mnemonic)
  bip39.mnemonicToSeed(mnemonic).then(seed => {
    const root = bip32.fromSeed(seed, network)
    const btcKeyPair = root.derivePath("m/44'/0'/0'/0/0")
    const p2pkh = bitcoin.payments.p2pkh({ network, pubkey: btcKeyPair.publicKey })
    console.log('BTC 普通地址')
    console.log('Path:', "\"m/44'/0'/0'/0/0\"")
    console.log('Private Key:', btcKeyPair.toWIF())
    console.log('Public Key:', btcKeyPair.publicKey.toString('hex'))
    console.log('Address:', p2pkh.address)

    const btcKeyPair2 = root.derivePath("m/49'/0'/0'/0/0")
    const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: btcKeyPair2.publicKey, network })
    const p2sh = bitcoin.payments.p2sh({ redeem: p2wpkh, network })
    console.log('BTC 隔離見證(兼容)地址')
    console.log('Path:', "\"m/49'/0'/0'/0/0\"")
    console.log('Private Key:', btcKeyPair2.toWIF())
    console.log('Public Key:', btcKeyPair2.publicKey.toString('hex'))
    console.log('Redeem script:', p2sh.redeem.output.toString('hex'))
    console.log('Address:', p2sh.address)

    const btcKeyPair3 = root.derivePath("m/84'/0'/0'/0/0")
    const hash256 = crypto.createHash('sha256').update(btcKeyPair3.publicKey).digest()
    const hash160 = crypto.createHash('ripemd160').update(hash256).digest()
    const words = bech32.toWords(hash160)
    words.unshift(0)
    const encode = test ? 'tb' : 'bc'
    console.log('BTC 隔離見證(原生)地址')
    console.log('Path:', "\"m/84'/0'/0'/0/0\"")
    console.log('Private Key:', btcKeyPair3.toWIF())
    console.log('Public Key:', btcKeyPair3.publicKey.toString('hex'))
    console.log('Address:', bech32.encode(encode, words))

    const hdWallet = hdkey.fromMasterSeed(seed)
    const ethKeyPair = hdWallet.derivePath("m/44'/60'/0'/0/0")
    console.log('ETH 普通地址')
    console.log('Path:', "\"m/44'/60'/0'/0/0\"")
    console.log('Private Key:', util.bufferToHex(ethKeyPair._hdkey._privateKey))
    console.log('Public Key:', util.bufferToHex(ethKeyPair._hdkey._publicKey))
    console.log('Address:', util.toChecksumAddress(util.pubToAddress(util.bufferToHex(ethKeyPair._hdkey._publicKey), true).toString('hex')))
  })
} else {
  console.log(mnemonic)
}