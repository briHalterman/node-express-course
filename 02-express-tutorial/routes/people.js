const express = require('express');
const router = express.Router();

let { people } = require('../data');

// require addPerson and getPeople
const { addPerson, getPeople } = require('../controllers/people.js');

// add a router.get() statement for the ‘/’ path
// change the router.get statement to call getPeople, instead of doing the processing inline
// router.get('/', (req, res) => {
//     res.status(200).json(people);
// });
router.get('/', getPeople);

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

module.exports = router;