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