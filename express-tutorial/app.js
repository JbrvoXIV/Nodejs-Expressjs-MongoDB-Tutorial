const express = require('express')
const app = express()
const logger = require('./logger.js')

// Middleware: req => middleware => res

// can pass logger as middleware parameter in .get or use app.use to pass globally
// app.get('/', logger, (req, res) => {
//     res.send('Home Page')
// })

app.use(logger);
// or pass specifically to certain paths
// app.use('/api', logger)

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/about', (req, res) => {
    res.send('About Page')
});

app.get('/contacts', (req, res) => {
    res.send('Contact Page')
});

app.get('/product', (req, res) => {
    res.send('Product Page')
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
});