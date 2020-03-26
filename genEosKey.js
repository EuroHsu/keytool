const ecc = require('eosjs-ecc')

ecc.randomKey().then(privateKey => {
console.log('Private Key:', privateKey)
console.log('Public Key:', ecc.privateToPublic(privateKey))
})
