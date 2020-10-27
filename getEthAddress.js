const argv = require('minimist')(process.argv.slice(2), { string: ['key'] })
const Web3 = require('web3')
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
const ask = question => new Promise(resolve => rl.question(question, resolve))

const web3 = new Web3()
let privateKey = argv.key
const init = async () => {
  if (!privateKey) privateKey = await ask('請輸入私鑰: ')
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)
  console.log(account.address)
  process.exit(0)
}

init()
