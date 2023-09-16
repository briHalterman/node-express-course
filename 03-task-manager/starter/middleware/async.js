// avoid try/catch while still using await syntax
// set up try/catch blocks inside of wrapper

const asyncWrapper = (fn) => { // take controller as an argument
    return async (req, res, next) => { // access res, res, and next from express
        // set up try/catch block
        try {
            await fn(req, res, next) // use await to wait for promise to be settled
        } catch (error) {
            next(error); // pass error to another set of middleware (haven't set up yet)
        }
    }
};

module.exports = asyncWrapper;