// set up controllers

// Get All Tasks (GET)
const getAllTasks = (req, res) => {
    res.send('all items from the file');
};

// Create Task (POST)
const createTask = (req, res) => {
    // res.send('create task');
    res.json(req.body); // send what we are getting from the client
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