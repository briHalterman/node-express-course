console.log('Task Manager App');

// REST (representational state transfer) API (application programming interface)

// GET          api/tasks       - Get All Tasks
// POST         api/tasks       - Create Task
// GET          api/tasks/:id   - Get Task
// PUT/PATCH    api/tasks/:id   - Update Task
// DELETE       api/tasks/:id   - Delete Task

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//  middleware

app.use(express.json()); // so we have data from req.body

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));