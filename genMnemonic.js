const argv = require('minimist')(process.argv.slice(2), { string: ['test', 'info'] })
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')
const hdkey = require('ethereumjs-wallet/hdkey')
const util = require('ethereumjs-util')
const ecc = require('eosjs-ecc')

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
    const p2wpkh = bitcoin.payments.p2wpkh({pubkey: btcKeyPair.publicKey, network})
    const p2sh = bitcoin.payments.p2sh({redeem: p2wpkh, network})
    console.log('BTC', {
      'Private Key': btcKeyPair.toWIF(),
      'Public Key': btcKeyPair.publicKey.toString('hex'),
      'P2PKH Address': p2pkh.address,
      'Redeem script': p2sh.redeem.output.toString('hex'),
      'P2SH Address': p2sh.address
    })

    const hdWallet = hdkey.fromMasterSeed(seed)
    const ethKeyPair = hdWallet.derivePath("m/44'/60'/0'/0/0")
    console.log('ETH', {
      'Private Key': util.bufferToHex(ethKeyPair._hdkey._privateKey),
      'Public Key': util.bufferToHex(ethKeyPair._hdkey._publicKey),
      'Address': util.toChecksumAddress(util.pubToAddress(util.bufferToHex(ethKeyPair._hdkey._publicKey), true).toString('hex'))
    })

    const eosPrivateKey = ecc.seedPrivate(util.bufferToHex(seed))
    console.log('EOS', {
      'Private Key': eosPrivateKey,
      'Public Key': ecc.privateToPublic(eosPrivateKey)
    })
  })
} else {
  console.log(mnemonic)
}