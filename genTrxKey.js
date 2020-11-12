const argv = require('minimist')(process.argv.slice(2), { string: ['info'] })
const TronWeb = require('tronweb')

const info = Object.prototype.hasOwnProperty.call(argv, 'info')
const tronWeb = new TronWeb('https://api.trongrid.io', 'https://api.trongrid.io')

const init = async () => {
  const account = await tronWeb.createAccount()
  if (info) {
    console.log(account)
  } else {
    console.log(account.privateKey)
  }
}

init()