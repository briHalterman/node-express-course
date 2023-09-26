require('dotenv').config(); // in oprder to access .env variables
require('express-async-errors'); // we use this package so we don't have to set up our own async middleware

const express = require('express'); // grab express from express
const app = express(); // invoke express and set it equal to app

// import error handler and not-found middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public')); // serve static files, where front-end app lives
app.use(express.json());  // for POST route access to req.body to get data

// implement both middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000; // port variable

// not connecting to database
const start = async () => {
  try {
    app.listen(port, () => // call app.listen & set up the port
      console.log(`Server is listening on port ${port}...`) // set up the console.log()
    );
  } catch (error) {
    console.log(error); // if there is an error, log it
  }
};

start();
