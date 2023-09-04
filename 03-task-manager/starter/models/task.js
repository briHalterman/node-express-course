// set up the structure for future documents and assign them to the collection

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String, 
    completed: Boolean
});

// model as representation of collection
module.exports = mongoose.model('Task', TaskSchema);