// controllers

// if exist create new JWT
// send back to front-end

// set up authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error'); // import custom error

const login = async (req, res) => {
    const { username, password } = req.body;
    // mongoose validations
    // Joi
    // check in the controller

    console.log(username, password);
    res.send('Fake Login/Register/Signup'); // normally there will be a difference between logging in vs registering
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100); // random number between 0 and 99
    res.status(200).json({ 
        msg: `Hello, John Doe`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
    });
};

module.exports = { 
    login, 
    dashboard 
};