// controllers

// if exist create new JWT
// send back to front-end

// set up authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error'); // import custom error

// check for username, password in post(login) request
// normally there will be a difference between logging in vs registering
const login = async (req, res) => {
    const { username, password } = req.body;
    // mongoose validations
    // Joi
    // check in the controller

    // if username or password is not provided, throw custom error
    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    };
    
    // just for demo, normally provided by DB!!!!
    const id = new Date().getDate()
    
    // create new token
    // try to kepp payload small, better for user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'}); // don't send confidential info!
    
    // console.log(username, password);
    // res.send('Fake Login/Register/Signup'); 
    res.status(200).json({ msg: 'user created', token })    
};

const dashboard = async (req, res) => {
    console.log(req.user);

    // console.log(req.headers);
    // const authHeader = req.headers.authorization;
    
    // // very important that syntax is exact
    // if (!authHeader || !authHeader.startsWith('Bearer '))  {
    //     throw new CustomAPIError('No token provided', 401) // "Invalid Credentials to Access This Route"
    // }

    // const token = authHeader.split(' ')[1];
    // console.log(token);

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     // console.log(decoded);
    //     const luckyNumber = Math.floor(Math.random() * 100);
    //     res.status(200).json({ 
    //         // msg: `Hello, John Doe`,
    //         msg: `Hello, ${decoded.username}`, 
    //         secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
    //     });
    // } catch (error) {
    //     throw new CustomAPIError('Not Authorized to Access This Route', 401) // 401 -- authentication error
    // };

    // move to try block
    // const luckyNumber = Math.floor(Math.random() * 100); // random number between 0 and 99
    // res.status(200).json({ 
    //     msg: `Hello, John Doe`, 
    //     secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
    // });

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        // msg: `Hello, ${decoded.username}`, 
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

module.exports = { 
    login, 
    dashboard 
};