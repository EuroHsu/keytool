const argv = require('minimist')(process.argv.slice(2), { string: ['info'] })
const Web3 = require('web3')

const info = Object.prototype.hasOwnProperty.call(argv, 'info')
const web3 = new Web3()
const account = web3.eth.accounts.create()
if (info) {
  console.log('Private Key:', account.privateKey)
  console.log('Address:', account.address)
} else {
  console.log(account.privateKey)
}
