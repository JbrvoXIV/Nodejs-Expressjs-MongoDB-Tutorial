const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.send('Please Provide Credentials')
    }
})

// parse json
app.use(express.json())

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide name value' })
    }
    return res.status(201).json({ success: true, person: name })
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// retrieves name from input and returns updated data set with new name
app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
                .status(400)
                .json({ success: false, message: 'Please provide name value' })
    } else {
        return res.status(201).send({ success: true, data: [...people, { id: people.length + 1, name: name}] })
    }
})


// accesses id from params and name from body and updates name according to ID
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find(person => {
        return person.id === Number(id)
    })

    if (!person) {
        return res
                .status(404)
                .json({ success: false, message: `No Person with ID ${id}`})
    }

    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    
    return res.status(200).json({ success: true, data: newPeople })
})

// accesses id from params and deletes entry containing id and returns new data set
app.delete('/api/people/:id', (req, res) => {
    const person = people.find(person => {
        return person.id === Number(req.params.id)
    })

    if (!person) {
        return res
                .status(404)
                .json({ success: false, message: `Person with ID ${req.params.id} not found.` })
    }

    const newPeople = people.filter(person => {
        return person.id !== Number(req.params.id)
    })

    res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})