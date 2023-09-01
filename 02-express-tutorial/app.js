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
// 

// require statement for express
const express = require('express');

// Creation of the app as returned from express()
const app = express();

// Add data.js require statement
const { products } = require('./data');

// create a middleware function called logger in app.js
// middleware is everywhere in express
// req => middleware => res
// a middleware function is passed req and res, and a third parameter, next
const logger = (req, res, next) => {
    // log the method and url from the req object, as well as the time, before calling next()
    const method = req.method; // method
    const url = req.url; // url
    const time = new Date().getFullYear(); // time
    console.log(method, url, time); // log method, url & time
    // the next() function must be called once middleware processing is completed, else no response is sent back for the request
    next(); // call next()
};

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
// return a res.json(req.params)
app.get('/api/v1/products/:productID', (req, res) => {
    // res.status(200).json(req.params);
    // const { productID } = req.params;
    const idToFind = parseInt(req.params.productID); // because this will be a string, and we need an integer
    const singleProduct = products.find((p) => p.id === idToFind);

    console.log(singleProduct);

    // return a 404 status code and JSON for { message: “That product was not found.”}
    if (!singleProduct) {
        return res.status(404).json({ message: 'That product was not found.' });
    }
    return res.status(200).json(singleProduct);
})

// filter & slice
// new app.get statement
// for /api/v1/query
// handle query strings
app.get('/api/v1/query', (req, res) => {
    // res.status(200).json(req.query.search);
    // console.log(req.query);
    const { search, limit, maxPrice } = req.query;
    let sortedProducts = [...products];

    // ALWAYS ALWAYS when setting up condition, include return to avoid errors

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // add logic to search by maximum price
    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price <= Number(maxPrice);
        })
    }

    if (sortedProducts < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success : true, data : [] })
    }

    res.status(200).json(sortedProducts);
    // res.send('hello world'); // cannot send headers
});

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