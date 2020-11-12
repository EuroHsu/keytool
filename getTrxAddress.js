const argv = require('minimist')(process.argv.slice(2), { string: ['key', 'hex'] })
const TronWeb = require('tronweb')
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
const ask = question => new Promise(resolve => rl.question(question, resolve))

const tronWeb = new TronWeb('https://api.trongrid.io', 'https://api.trongrid.io')
const hex = Object.prototype.hasOwnProperty.call(argv, 'hex')
let privateKey = argv.key

const init = async () => {
  if (!privateKey) privateKey = await ask('請輸入私鑰: ')
  const address = tronWeb.address.fromPrivateKey(privateKey)
  if (hex) {
    const hex = tronWeb.address.toHex(address)
    console.log(hex)
  } else {
    console.log(address)
  }
  process.exit(0)
}

init()
