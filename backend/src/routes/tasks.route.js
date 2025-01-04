import express from 'express';
import { addTaskController, deleteTasksController, editTasksController, viewTasks } from '../controllers/task.controller.js';

const router = express.Router();

router.route('/tasks')
    .get(viewTasks)
    .post(addTaskController)
    .delete(deleteTasksController)
    .put(editTasksController);


export default router;