// Catching Errors
// Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.

// If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler.

// Writing Error Handlers
// Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next)

// Example:
// app.use(function (err, req, res, next) {
//     console.log.error(err.stack);
//     res.status(500).send('Something broke!');
// });

const { CustomAPIError } = require('../errors/custom-error')

// const errorHandlerMiddleware = (err, req, res, next) => {
//     // will add more code, once we set up our own custom error class
//     // return res.status(500).json({ msg: err });
//     return res.status(500).json({ msg: `Something went wrong, please try again later` }); // hardcoded error
// };

// const errorHandlerMiddleware = (err, req, res, next) => {
//     console.log(err);
//     // return res.status(500).json({ msg: `Something went wrong, please try again later` });
//     return res.status(err.status).json({ msg: err.message });
// };

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: `Something went wrong, please try again later` });
};

// don't forget to export
module.exports = errorHandlerMiddleware;