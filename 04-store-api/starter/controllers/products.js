// The idea is that one can search by any or all of these attributes: featured, name, price, rating, company
// For the numeric fields price and rating, one can also specify greater than, less than, or equal to
// One can also specify a sort order 
// Also one can specify a skip and a limit, to facilitate pagination through the result

// Two methods, getAllProducts and getAllProductsStatic
// The getAllProductsStatic method is just for experimentation
const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    res.status(200).json({ msg: 'products testing route' });
}; 

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route' });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};