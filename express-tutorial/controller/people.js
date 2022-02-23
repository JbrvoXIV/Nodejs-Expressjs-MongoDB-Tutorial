let { people } = require('../data')

const getPeople = (req, res) => {
    return res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide name value' })
    }
    return res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
                .status(400)
                .json({ success: false, message: 'Please provide name value' })
    } else {
        return res.status(201).send({ success: true, data: [...people, { id: people.length + 1, name: name}] })
    }
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = { 
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
 }