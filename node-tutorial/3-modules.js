// Modules

const names = require('./4-firstModule')
const sayHi = require('./5-secondModule')
const data = require('./6-alternativeFlavors')
require('./7-mindGrenade')

console.log(data)
console.log(names)
console.log(sayHi)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)