// Protecting Routes

// To protect routes in your Express application, you create authentication middleware, which runs before the route handler for each protected request

// The authentication middleware:
// checks that the token is present with the HTTP request, typically as the bearer token in the Authentication header
// validates the token cryptographically, making sure the signature matches the secret 
// stores the user ID and perhaps other information about that user in the req.user hash, so that it can be used by the controller functions handling each request

// Some routes are not protected by the authentication middleware, including in particular the logon route and registration routes and any pages that don’t require protection

// For this lesson, we won’t store the user information, which means that the user is not registered and the password is not validated. Instead, the user enters an ID and password and a JWT token is created. Then the token is used to access the protected route.

const jwt = require('jsonwebtoken');
// const CustomAPIError = require('../errors/custom-error'); // check path
const { UnauthenticatedError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    
    // check for authorization header
    if (!authHeader || !authHeader.startsWith('Bearer '))  { // check for bearer
        // throw new CustomAPIError('No token provided', 401)
        throw new UnauthenticatedError('No token provided') 
    }

    const token = authHeader.split(' ')[1]; // split header

    try {
        // run verify method, pass in token and pass in secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // const luckyNumber = Math.floor(Math.random() * 100)
        // res.status(200)
        // .json({ 
            // msg: `Hello, ${decoded.username}`,
            // secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
        // });
        const { id, username } = decoded; // from decoded
        req.user = { id, username } // create new object
        next();  // pass on to next middleware
    } catch (error) {
        // throw new CustomAPIError('Not authorized to access this route', 401);
        throw new UnauthenticatedError('Not authorized to access this route');
    };

    // next();
};

module.exports = authenticationMiddleware;