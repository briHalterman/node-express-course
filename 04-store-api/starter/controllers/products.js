// The idea is that one can search by any or all of these attributes: featured, name, price, rating, company
// For the numeric fields price and rating, one can also specify greater than, less than, or equal to
// One can also specify a sort order 
// Also one can specify a skip and a limit, to facilitate pagination through the result

const Product = require('../models/product');

// Two methods, getAllProducts and getAllProductsStatic
// The getAllProductsStatic method is just for experimentation
const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route' });
};

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    const products = await Product.find({ 
        // featured: true,
        name: 'vase table'
    })
    res.status(200)
    // .json({ msg: 'products testing route' })
    .json({ products, nbHits: products.length });
}; 

module.exports = {
    getAllProducts,
    getAllProductsStatic
};