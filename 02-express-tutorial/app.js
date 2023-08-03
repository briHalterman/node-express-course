console.log('Express Tutorial');

// Add all the elements of an Express application
    // --The require statement for express
    // --Creation of the app as returned from express()
    // --app.use statements for the middleware --express.static()
    // --app.get and app.post statements for the routes you will handle --inline for now
    // --An app.all statement after these to handle page not found conditions
    // --An app.listen statement

    // You won’t have any app.get or app.post statements yet --have the statement app.use(express.static(‘./public’)) 
    // Use port 3000 in the listen statement

// require statement for express
const express = require('express');

// Creation of the app as returned from express()
const app = express();

// Add data.js require statement
const { products } = require('./data');

// app.use statement for the middleware
// You’ll eventually use many kinds of middleware, but for now the only express.static()
// app.use(express.static(‘./public’)) so that your HTML file will load
app.use(express.static('./public'));

// app.get and app.post statements
// Eventually these will be refactored into router modules, but for now you can put them inline
// You won’t have any app.post statements yet

// app.get statement 
// for the URL "/api/v1/test"
// return res.json({message: 'It worked!'})
app.get('/api/v1/test', (req, res) => {
    res.json({message: 'It worked!'});
});

// app.get statement
// for the URL "/api/v1/products"
// return the products variable, an array of objects from data.js
app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products);
});

// app.get statement
// for the URL "/api/v1/products/:productID"
// Return a res.json(req.params)
app.get('/api/v1/products/:productID', (req, res) => {
    res.status(200).json(req.params);
})

// app.all statement
// to handle page not found conditions
app.all('*', (req, res) => {
    res.status(404).send('page not found');
});

// app.listen statement
// use port 3000
app.listen(3000, () => {
    console.log('server is listening on port 3000...');
});