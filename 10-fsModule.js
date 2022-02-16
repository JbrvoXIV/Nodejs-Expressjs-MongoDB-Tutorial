const { readFileSync, writeFileSync } = require('fs')

const firstTxt = readFileSync('./content/first.txt', 'utf8')
const secondTxt = readFileSync('./content/subcontent/second.txt', 'utf8')

console.log(firstTxt, secondTxt);

const newFileText = 'Text created in 10-fsModule.js for newFile'
// creates file if not found, else it overwrites everything in located file
writeFileSync('./content/subcontent/third.txt', newFileText)
writeFileSync('./content/subcontent/third.txt', 'Appended text', { flag: 'a' })
