// start with a require statement that gets the people array from ../data.js
let { people } = require('../data');

// create functions addPerson and getPeople
// each passed req and res

// getPeople function
const getPeople = (req, res) => {
    // copy the logic from your router/people.js file
    res.status(200).json(people);
};

// addPerson function
const addPerson = (req, res) => {
    // copy the logic from your router/people.js file
    const { name } = req.body;
    // check req.body to see if there is a req.body.name
    // if no req.body.name, return JSON for an error
    if (!name) {
        // Set the HTTP result code to 400, which means there was an error on the client side, and also returns an error message
        return res.status(400).json({success: false, message: 'Please provide a name'});
    }
    // if there is a value in req.body.name, add the entry to the people array
    if (name) {
        people.push({id: people.length, name: req.body.name});
        res.status(201).json({success: true, name: req.body.name}); // The HTTP status code 201 means that an object was created on the server side    
    }
};

// export { addPerson, getPeople }
module.exports = { addPerson, getPeople };