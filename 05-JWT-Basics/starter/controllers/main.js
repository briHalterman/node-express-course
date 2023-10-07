// CONTROLLERS

// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// if user provides correct credentials, we send back signed JWT
// in order to access dashboard route, must provide same token

// Concept: Authentication with JWT Tokens

// user identifier and a password are stored by the application, typically in a database
// if the application stores this information in MongoDB, you will have a User model
// The model stores the user ID, a hash of the password, and perhaps other information

// The password itself is never stored, because that would make the application a risky repository of user passwords. Instead, a cryptographic hash of the password is stored, and this information allows the user password to be validated at logon time, without storing the password itself

// When the user logs in, the front end of the application needs to store a credential for use in subsequent requests — otherwise the user would have to login for every protected request
// One type of credential that is often used for REST requests is a JSON web token (JWT)
// cryptographically signed by the server, using a server maintained secret, so it can’t be counterfeited
// contains information about which user is logged in
// not human readable, but it is not encrypted either, so you should never put sensitive information in it, especially not the password
// When the user is registered in MongoDB, a unique ID is created, just as it is for every MongoDB entry. This ID is typically stored in the token

// JWT - way to exchange data between two parties
// Integrity! JWT has security feature, if the token passes the validation, it means its the same token we sent to the client and the data wasn't tampered with
// HTTP is stateless, server does not "remember" any previous request sent by the same client (front-end will always need to send JWT)

// What is a JSON Web Token?
// This information can be verified and trusted because it has been digitally signed
// using secret & algorithm
// header, payload & signature
// Header - type & algorithm
// Payload - this is where we'll place the information i.e. user id
// Signature - where algorithm is used, incl. secret (kept on server)
// The output is three Base64-URL strings separated by dots that can be easily passed in HTML & HTTP environments

// set up authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken');

// const BadRequestError = require('../errors/custom-error'); // import custom error
const { BadRequestError } = require('../errors');

// check for username, password in post(login) request
// normally there will be a difference between logging in vs registering
const login = async (req, res) => {
    const { username, password } = req.body;
    // mongoose validations
    // Joi
    // check in the controller

    // if username or password is not provided, throw custom error
    if(!username || !password) {
        // throw new CustomAPIError('Please provide email and password', 400);
        throw new BadRequestError('Please provide email and password');
    };
    
    // just for demo, normally provided by DB!!!!
    const id = new Date().getDate()
    
    // create new token and send back to front-end
    // try to keep payload small, better for user experience
    // just for demo, in production use long, complex and unguessable password!!!!!!!!
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'}); // don't send confidential info!
    
    // console.log(username, password);
    // res.send('Fake Login/Register/Signup'); 
    res.status(200).json({ msg: 'user created', token })    
};

const dashboard = async (req, res) => {
    // console.log(req.user);

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