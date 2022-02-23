const express = require('express')
const app = express()
const people = require('./router/people')
const authorization = require('./router/auth')
// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
// router for people
app.use('/api/people', people)
// router for authorization
app.use('/login', authorization)
app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})