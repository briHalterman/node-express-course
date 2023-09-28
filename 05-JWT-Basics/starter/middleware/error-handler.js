const CustomAPIError = require('../errors/custom-error'); // custom API error
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) { // check for instance of custom API
    return res.status(err.statusCode).json({ msg: err.message }) // send back the response
  }
  return res
  .status(500) // otherwise generic 500 error response
  .send('Something went wrong try again later');
};

module.exports = errorHandlerMiddleware;
