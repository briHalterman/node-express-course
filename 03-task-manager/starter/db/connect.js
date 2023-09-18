const mongoose = require('mongoose');

// const connectionString = ''; // cut value

const connectDB = (url) => {
// return mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
}

// mongoose
//     .connect(connectionString, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     })
//     // .then(() => console.log('CONNECTED TO THE DB...'))
//     // .catch((err) => console.log(err))

module.exports = connectDB;