const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTask);
router.get('/project/:projectId', TaskController.getTasksByProject);
router.post('/', TaskController.createTask);
router.patch('/:id/toggle', TaskController.toggleTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
