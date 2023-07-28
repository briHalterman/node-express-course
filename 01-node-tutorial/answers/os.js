// OS

// Should load the built in os module and display some interesting information from the resulting object 
// Load a reference with a require statement

// NOTE
// const os = require('os')

// Tutorial code

const os = require( 'os' );

// info about current user
const user = os.userInfo();
console.log( user );

// method returns the system uptime in seconds
console.log( `The System Uptime is ${ os.uptime() } seconds` );

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log( currentOS );