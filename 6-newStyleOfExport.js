module.exports.items=['item1',2,213,1,1,21,21,21]

const info = {
    name:'praveen',
    age:24
}

module.exports.person = {info}

const chek = require('./6-newStyleOfExport')

console.log(chek.items,chek.person)