require('dotenv').config(); // comment out to check error

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany(); // technically optional
        await Product.create(jsonProducts);
        process.exit(0);
        console.log('Success!!!!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};

start();