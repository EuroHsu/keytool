const argv = require('minimist')(process.argv.slice(2), { string: ['key'] })
const Web3 = require('web3')

const web3 = new Web3()
const privateKey = argv.key
const account = web3.eth.accounts.privateKeyToAccount(privateKey)
console.log(account.address)
