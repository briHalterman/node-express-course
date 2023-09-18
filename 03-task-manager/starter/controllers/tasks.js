// START USING MODEL
const Task = require('../models/task')
// an instance of a model is call a document
// the first argument is the singular name of the collection the model is for

// SET UP CONTROLLERS

// Get All Tasks (GET)
const getAllTasks = (req, res) => {
    res.send('get all tasks');
};

// Create Task (POST)
// const createTask = (req, res) => {
//     // res.send('create task');
//     res.json(req.body); // send what we are getting from the client
// }
const createTask = async (req, res) => {
    // const task = await Task.create({ name: 'first task' }) // hardcoded
    // res.json(req.body);

    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

// Get Task (GET)
const getTask = (req, res) => {
    // res.send('get single tasks');
    res.json({ id: req.params.id })
} ;

// Delete Task (DELETE)
const deleteTask = (req, res) => {
    res.send('delete task');
};

// Update Task (POST)
const updateTask = async (req, res) => {
    res.send('update task');
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}