import tasksDB from "../db/db.js"

const viewTasks = async (req, res) => {
    try {

        return res.status(200).json({
            message: "Tasks fetched!",
            data: tasksDB,
            statusCode: 200
        });


    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong!",
            err: err.toString(),
            statusCode: 500
        })
    }
}

const addTaskController = async (req, res) => {
    try {

        const task = req.body;

        const idForTask = tasksDB.length;

        task.id = idForTask;

        tasksDB.push(task);

        return res.status(201).json({
            message: "Task added!",
            data: tasksDB,
            statusCode: 201
        })


    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong!",
            err: err.toString(),
            statusCode: 500
        });
    }
}

const editTasksController = async (req, res) => {
    try {

        const editedTask = req.body;

        const idx = tasksDB.findIndexOf(task => task.id == editedTask.id);

        if (!idx) {
            return res.status(404).json({
                message: "Task not found!",
                err: err.toString(),
                statusCode: 404
            });
        }

        tasksDB[idx].task = editedTask.task;


        res.status(200).json({
            message: "Task updated!",
            statusCode: 200,
            data: tasksDB
        })


    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong!",
            err: err.toString(),
            statusCode: 500
        })
    }
}

const deleteTasksController = async (req, res) => {
    try {
        const taskId = req.body;

        const idx = tasksDB.findIndexOf(task => task.id == taskId);

        if (!idx) {
            return res.status(404).json({
                message: "Task not found!",
                err: err.toString(),
                statusCode: 404
            });
        }

        tasksDB = tasksDB.filter(task => task.id !== taskId);

        res.status(200).json({
            message: "Task Deleted!",
            statusCode: 200,
            data: tasksDB
        });


    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong!",
            err: err.toString(),
            statusCode: 500
        });
    }
}


export {
    viewTasks,
    addTaskController,
    editTasksController,
    deleteTasksController
}