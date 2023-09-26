const CustomAPIError = require('../errors/custom-error'); // custom API error
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) { // look for that instance
    return res.status(err.statusCode).json({ msg: err.message }) // if that is the case, err.StatusCode is the response
  }
  return res
  .status(500) // otherwise generic 500 error response
  .send('Something went wrong try again later');
};

module.exports = errorHandlerMiddleware;
