// Concepts: Error Handling

// The elements of error handling:

// express-async-errors package: 
// to catch errors thrown in your controllers and send them on to the process error handler

// StatusError class: 
// can be instantiated when an error occurs
// should extend the built in Error class
// should have a constructor that takes two parameters, the error message and a number that is the HTTP status code

// Error handling middleware:
// called as a result of an app.use() statement that appears after all of your routes
// must be declared with four parameters, err, req, res, and next

// The error handler has to return something to the caller, as otherwise the caller would just hang waiting on the HTTP response. So it returns an appropriate HTTP result code, along with a descriptive error message. As this is an API, the error message is returned as JSON. If there is an error in your code, the error handler is invoked. Some errors are expected, such as authentication errors, and in this case the error handler can return a descriptive errror message and an appropriate HTTP result code to the caller. In your error handler, you need to parse the validation error to get a useful error message, such as how one or several attributes fail validation. Authentication errors (bad user email or password) are also expected. Cast errors can occur if the request includes an ID that is not a valid Mongo entry ID, so this is an expected error and you can return a 404. Please look at the instructor’s code to see how these cases are handled.

// But some errors are not expected — that is, if your code is working right, they should never occur. For these, it is not a good idea to give the original error message back to the user, so you return a message such as “A server error occurred.” with a 500 result code, and you also do a console log of such errors, so that you can find the bug.

// const CustomAPIError = require('../errors/custom-error'); // custom API error
const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

// There are a few other status code instances, but we will not worry about them right now

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) { // check for instance of custom API
    return res.status(err.statusCode).json({ msg: err.message }) // send back the response
  }

  return res
  // .status(500) // otherwise generic 500 error response
  .status(StatusCodes.INTERNAL_SERVER_ERROR)
  .send('Something went wrong try again later');
};

module.exports = errorHandlerMiddleware;

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