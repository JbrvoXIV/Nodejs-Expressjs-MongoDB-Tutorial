const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        // const text = fs.readFileSync('./content/big.txt', { encoding: 'utf8' })
        // res.end(text) // this takes too long to send over network
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })

        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)