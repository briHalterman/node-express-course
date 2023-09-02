const express = require('express');
const router = express.Router();

let { people } = require('../data');

// require addPerson and getPeople
// require getPerson
const { 
    addPerson, 
    getPeople, 
    getPerson, 
    updatePerson, 
    removePerson 
} = require('../controllers/people.js');

// add a router.get() statement for the ‘/’ path
// change the router.get statement to call getPeople, instead of doing the processing inline
// router.get('/', (req, res) => {
//     res.status(200).json(people);
// });
router.get('/', getPeople);

// Add a router.get statement to routes/people.js
// router.get('/:id', (req, res) => {
//     move the logic for this statement to controllers/people.js
//     const { id } = req.params;
//     // use Array.find(), but convert req.params.id from a string to an integer
//     const person = people.find((person) => person.id === Number(id));
//     // if the array includes a people entry with a matching id
//     if (person) {
//         // return a JSON object with that entry
//         return res.status(200).json(person) // return code 200
//     }
//     // if the entry is not found
//     if (!person) {
//         // return an error with JSON that has an appropriate message
//         return res.status(404).json({ success: false, msg: `no person with id ${id}`});
//     }
// });
router.get('/:id', getPerson)

// add a router.post()statement for ‘/’
// change the router.post statement to call addPerson, instead of doing the processing inline
// router.post('/', (req, res) => {
//     const { name } = req.body;
//     // check req.body to see if there is a req.body.name
//     // if no req.body.name, return JSON for an error
//     if (!name) {
//         // Set the HTTP result code to 400, which means there was an error on the client side, and also returns an error message
//         return res.status(400).json({success: false, message: 'Please provide a name'});
//     }
//     // if there is a value in req.body.name, add the entry to the people array
//     if (name) {
//         people.push({id: people.length, name: req.body.name});
//         res.status(201).json({success: true, name: req.body.name}); // The HTTP status code 201 means that an object was created on the server side    
//     }
// });
router.post('/', addPerson);

// add a router.put statement to routes/people.js
// The processing for this should be in the controller
// router.put('/:id', (req, res) => {
//     const { id } req.params;
//     const { name } = req.body;
//     const person = people.find((person) => person.id === Number(id));

//     // return error if the people entry is not found
//     if (!person) {
//         return res.status(404).json({ success: false, msg: `no person with id ${id}` });
//     }

//     // update the people entry if it is found
//     const updatedPerson = people.map((person) => {
//         if (person.id === Number(id)) {
//             person.name = name;
//         }
//         return person;
//     });
//     res.status(200).json({ success: true, data: updatedPerson})
// });
router.put('/:id', updatePerson);

// add a router.delete statement
// router.delete('/:id', (req, res) => {
//     const { id } = req.params.id;
//     const person = people.find((person) => person.id === Number(req.params.id));
//     if (!person) {
//         return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
//     }
//     // use Array.filter() to create the updated people array
//     const updatedPeople = people.filter((person) => person.id !== Number(req.params.id));
//     return res.status(200).json({ success: true, data: updatedPeople })
// });
router.delete('/:id', removePerson);

module.exports = router;