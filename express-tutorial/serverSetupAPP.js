const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public')) // app.use() sets up middleware
// static assets are things server does not have to change (i.e. image, etc.)

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
// or add to static assets
// SSR

app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not Found</h1>')
})

app.listen(5000, (req, res) => {
    console.log('server is listening on port 5000...')
})