const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error'); // check path

const authenticationMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    
    // check for authorization header
    if (!authHeader || !authHeader.startsWith('Bearer '))  { // check for bearer
        throw new CustomAPIError('No token provided', 401) 
    }

    const token = authHeader.split(' ')[1]; // split header

    try {
        // run verify method, pass in token and pass in secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded; // from decoded
        req.user = { id, username } // create new object
        next();  // pass on to next middleware
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401);
    };

    // next();
};

module.exports = authenticationMiddleware;