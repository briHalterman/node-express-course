const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

// The StatusError class could look like this:
// class StatusError extends Error {
//   constructor(message, resultCode) {
//     super(message)
//     this.statusCode = resultCode
//   }
// }

// If your authentication middleware finds that the JWT token is missing or invalid, you can just throw the error as follows:
// throw new ResultError("The request was not authenticated", StatusCodes.UNAUTHORIZED)

// Then you add appropriate code to the error handler to handle this case, sending back the status code and an appropriate JSON message to the caller

class BadRequestError extends CustomAPIError { 
    constructor(message) {
      super(message)
    //   this.statusCode = 400
    this.statusCode = StatusCodes.BAD_REQUEST
    };
};
  
module.exports = BadRequestError;