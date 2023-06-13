// UTILS

// Module that you load, using require statements, from modules.js
// Should export a single value, which is a function you call in modules.js
// The exported values from should be used in modules.js

// Tutorial code

const sayHi = (name) => {
    console.log(`Happy Bonnaroo ${name}!`);
};

// export default
module.exports = sayHi