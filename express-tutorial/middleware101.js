const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
const morgan = require('morgan')

// Middleware: req => middleware => res
// Middleware options: your own / built in express middleware / third party middleware (morgan npm)

// can pass logger as middleware parameter in .get or use app.use to pass globally
// app.get('/', logger, (req, res) => {
//     res.send('Home Page')
// })

// pass middleware to all routes
// app.use([logger, authorize]);

// or pass specifically to certain paths
// app.use('/api', logger)

app.use(morgan('tiny'))

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

// pass several middleware to only one route
// app.get('/api/items', [logger, authorize], (req, res) => {
//     console.log(req.user)
//     res.send('Items API page')
// })

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
});