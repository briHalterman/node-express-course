// MODULES

// Load modules, using require statements
// Remember that you must give the path name in your require statement
// The exported values from each module should be used in modules.js
// Log results to the console so that you know each module is working
// The only program you run to test is modules.js, because it loads the others


// NOTES

// Main program

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Tutorial code

const names = require('./04-names');
const sayHi = require('./05-utils')

sayHi('Deto')

// console.log(data)

console.log(names);