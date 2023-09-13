// set up the structure for future documents and assign them to the collection

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        // required: true
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    }, 
    // completed: Boolean
    completed: {
        type: Boolean,
        default: false
    }
});

// model as representation of collection
module.exports = mongoose.model('Task', TaskSchema);