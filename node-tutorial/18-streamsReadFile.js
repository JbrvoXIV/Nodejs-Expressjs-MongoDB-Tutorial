const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 30000,
    encoding: 'utf8'
})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})

// default is 64kb
// last buffer - remainder of data
// { highWaterMark: } - control size of data read
// { encoding:  } - controls read encode i.e 'utf8'