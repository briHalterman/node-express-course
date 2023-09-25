// The idea is that one can search by any or all of these attributes: featured, name, price, rating, company
// For the numeric fields price and rating, one can also specify greater than, less than, or equal to
// One can also specify a sort order 
// Also one can specify a skip and a limit, to facilitate pagination through the result

const Product = require('../models/product');

// Two methods, getAllProducts and getAllProductsStatic
// The getAllProductsStatic method is just for experimentation
const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    const search = 'ab';
    const products = await Product.find({ 
        // featured: true,
        // name: 'vase table',
        // page: '2',
        // name: 'albany ', // 'albany sectional',
        name: {$regex: search, $options: 'i'},
    })
    res.status(200)
    // .json({ msg: 'products testing route' })
    .json({ products, nbHits: products.length });
};

// search based on featured status, company, name, price & rating
const getAllProducts = async (req, res) => {
    // console.log(req.query);
    const { featured, company, name } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true'? true : false // ternary operator
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        // queryObject.name = name;
        queryObject.name = { $regex: name, $options: 'i'}
    }
    console.log(queryObject);

    // const products = await Product.find(req.query); 
    // // access to query string params in req.query --> object passed into find()
    const products = await Product.find(queryObject);
    res.status(200).json({ 
        // msg: 'products route'
        products, nbHits: products.length 
    });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};