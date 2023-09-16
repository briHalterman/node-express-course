console.log('Task Manager App');

// REST (representational state transfer) API (application programming interface)

// GET          api/tasks       - Get All Tasks
// POST         api/tasks       - Create Task
// GET          api/tasks/:id   - Get Task
// PUT/PATCH    api/tasks/:id   - Update Task
// DELETE       api/tasks/:id   - Delete Task

// CRUD (create read update destroy) - common aproach is to build api around crud

// Create an item
// Read items
// Update item
// Delete (remove) item

// MongoDB
// - NoSQL, non-relational db
// - Store JSON
// - easy to get started
// - free cloud hosting - atlas

// require('./db/connect'); // temporary

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//  middleware
app.use(express.static('./public'));
app.use(express.json()); // to have data from req.body

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// });

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 3000;

// invoke connectDB and then only if successful spin up server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();

// app.listen(port, console.log(`server is listening on port ${port}...`));