const argv = require('minimist')(process.argv.slice(2), { string: ['info'] })
const ecc = require('eosjs-ecc')

const info = Object.prototype.hasOwnProperty.call(argv, 'info')
ecc.randomKey().then(privateKey => {
  if (info) {
    console.log('Private Key:', privateKey)
    console.log('Public Key:', ecc.privateToPublic(privateKey))
  } else{
    console.log(privateKey)
  }
})
