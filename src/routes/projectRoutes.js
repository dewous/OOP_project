const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProject);
router.get('/user/:userId', ProjectController.getProjectsByUser);
router.post('/', ProjectController.createProject);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
