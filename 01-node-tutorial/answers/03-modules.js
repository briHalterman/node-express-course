// MODULES

// Main program
// Load modules, using require statements
// Remember that you must give the path name in your require statement
// The exported values from each module should be used in modules.js 
// Log results to the console so that you know it is working
// The only program you run to test is modules.js, because it loads the others


// NOTES

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Tutorial code

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alt-flavor');

sayHi('Deto');

console.log(names);
console.log(data);
