// START USING MODEL
const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

// an instance of a model is call a document
// the first argument is the singular name of the collection the model is for

// SET UP CONTROLLERS

// Refractor All Routes
// asychronous wrappers for controllers
// middleware wrapper function
// eliminates redundancy of try/catch blocks

// Get All Tasks (GET)

// const getAllTasks = (req, res) => {
//     res.send('get all tasks');
// };

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.status(200).json({ tasks }); // res.status(200).json({ tasks: tasks })
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     };
// };

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});

//         // res.status(200).json({ tasks });
//         // res.status(200).json({ tasks, amount: tasks.length });
//         // res.status(200).json({ success: true, data: { tasks, nbHits: tasks.length } })
//         res
//         .status(200)
//         .json({ 
//             status: 'success', // then for error, status: "fail"
//             data: { tasks, nbHits: tasks.length } 
//         })
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     };
// };
// status is a bit redundant with try/catch
// whichever route you pick, stick with it so there's no confusion

// refractor route
// const getAllTasks = asyncWrapper (async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.status(200).json({ tasks });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     };
// });

// remove try/catch block completely
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

// Create Task (POST)

// const createTask = (req, res) => {
//     // res.send('create task');
//     res.json(req.body); // send what we are getting from the client
// }

// const createTask = async (req, res) => {
//     // const task = await Task.create({ name: 'first task' }) // hardcoded
//     // res.json(req.body);
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
// }
// we have an asycronous operation but we're not handling if there is an error

// refractor route
// const createTask = async (req, res) => {
//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({ task });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     };
// }

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

// Get Task (GET)

// const getTask = (req, res) => {
//     // res.send('get single tasks');
//     res.json({ id: req.params.id })
// } ;

// refractor route
// const getTask = async (req, res) => { // set up async
//     try {
//         const { id: taskID } = req.params
//         const task = await Task.findOne({ _id: taskID }); // use static function findOne() to look for specific ID
//         // ALWAYS set up return!
//         if (!task) {
//             res.status(404).json({msg: `No task with id : ${taskID}` }) // if we don't find task send back 404
//         }
//         res.status(200).json({ task }); // if we find task with ID send back task
//     } catch (error) {
//         res.status(500).json({ msg: error }) // generic error
//     }; // use try catch
// };

const getTask = asyncWrapper(async (req, res) => { 
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID }); 
        // leave this for time being, but we will work on it later
        if (!task) {
            res.status(404).json({msg: `No task with id : ${taskID}` }) // when we set up custom error, there will be some changes here too
        }
        res.status(200).json({ task }); 
});

// Delete Task (DELETE)

// const deleteTask = (req, res) => {
//     res.send('delete task');
// };

// refractor route
// const deleteTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params;
//         const task = await Task.findOneAndDelete({ _id: taskID });
//         if (!task) {
//             return res.status(404).json({ msg: `No task with id : ${taskID}` });
//         };
//         res.status(200).json({ task });
//         // res.status(200).send();
//         // res.status(200).json({ task: null, status: 'success' });
//     } catch (error) {
//         res.status(500).json({ msg: error })
//     };
// };

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No task with id : ${taskID}` });
    };
    res.status(200).json({ task });
});

// Update Task (POST)

// PUT vs PATCH
// Both update the resource
// PUT - replaces existing resource
// PATCH - for partial update

// const updateTask = async (req, res) => {
//     res.send('update task');
// };

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { 
            new: true, 
            runValidators: true 
        }); // set up options param

        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        };

        res.status(200).json({ id: taskID, data: req.body });
    } catch (error) {
        res.status(500).json({ msg: error })
    };
};

// const editTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params;

//         const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { 
//             new: true, 
//             runValidators: true, 
//             overwrite: true // remove completed default
//         });

//         if (!task) {
//             return res.status(404).json({ msg: `No task with id : ${taskID}` });
//         };

//         res.status(200).json({ id: taskID, data: req.body });
//     } catch (error) {
//         res.status(500).json({ msg: error })
//     };
// };

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    // editTask
}