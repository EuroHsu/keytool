const argv = require('minimist')(process.argv.slice(2), { string: ['sender', 'nonce'] })
const Web3 = require('web3')
const rlp = require('rlp')
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
const ask = question => new Promise(resolve => rl.question(question, resolve))
const web3 = new Web3()

let sender = argv.sender
let nonce = argv.nonce

const init = async () => {
  const info = !sender || !nonce
  if (info) {
    console.log('以太坊合約的地址是根據創建者(sender)的地址以及創建者發送過的交易數量(nonce)來計算的')
    console.log('將 sender 和 nonce 進行 RLP 編碼，然後用 Keccak-256 進行 hash 計算')
  }
  if (!sender) sender = await ask('請輸入sender: ')
  if (!nonce) nonce = await ask('請輸入nonce: ')
  const contractAddress = '0x' + web3.utils.sha3(rlp.encode([sender, parseInt(nonce)])).slice(-40)
  console.log((info ? '合約地址: ' : '') + web3.utils.toChecksumAddress(contractAddress))
  process.exit(0)
}

init()
