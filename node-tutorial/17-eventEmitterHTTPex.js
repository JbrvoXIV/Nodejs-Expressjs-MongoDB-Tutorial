const http = require('http')

// EventEmitter API Approach
const server = http.createServer()

server.on('response', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)

// Same thing as
// const server = http.createServer((req, res) => {
//  res.end('Welcome')
//})