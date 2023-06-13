// OS

// This should load the built in os module and display some interesting information from the resulting object 
// As for all modules, you load a reference to it with a require statement in this case:

// NOTE

// const os = require('os') 

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);