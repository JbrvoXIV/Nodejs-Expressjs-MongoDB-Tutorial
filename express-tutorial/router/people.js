const express = require('express')
const router = express.Router()
let { people } = require('../data')
const { 
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controller/people')

// router.post('/', getPeople)

// router.get('/', createPerson)

// // retrieves name from input and returns updated data set with new name
// router.post('/postman', createPersonPostman)

// // accesses id from params and name from body and updates name according to ID
// router.put('/:id', updatePerson)

// // accesses id from params and deletes entry containing id and returns new data set
// router.delete('/:id', deletePerson)

// OR (it's all preference)

router.route('/')
        .get(getPeople)
        .post(createPerson);

router.route('/postman')
        .post(createPersonPostman);

router.route('/:id')
        .put(updatePerson)
        .delete(deletePerson);

module.exports = router