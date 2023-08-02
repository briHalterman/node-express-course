// ALTERNATIVE FLAVOR

// Module that you load, using require statements, from modules.js
// Should export multiple values in the module.exports object 
// Should use the alternative approach, adding each value one at a time 
// The exported values from should be used in modules.js

// Tutorial code

module.exports.items = ['What', 'Which', 'This', 'That', 'The Other'];

const person = {
    name: 'Pizza Buddy',
};

module.exports.singlePerson = person;