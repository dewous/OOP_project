const TaskRepository = require('../repositories/TaskRepository');

const getAllTasks = (req, res) => {
  res.json(TaskRepository.getAll());
};

const getTask = (req, res) => {
  const task = TaskRepository.getById(Number(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

const getTasksByProject = (req, res) => {
  const projectId = Number(req.params.projectId);
  res.json(TaskRepository.getByProjectId(projectId));
};

const createTask = (req, res) => {
  const { title, projectId } = req.body;
  if (!title || !projectId) return res.status(400).json({ message: 'Title and projectId are required' });

  const task = TaskRepository.create(title, projectId);
  res.status(201).json(task);
};

const toggleTask = (req, res) => {
  const task = TaskRepository.toggleComplete(Number(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

const deleteTask = (req, res) => {
  const deleted = TaskRepository.delete(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'Task not found' });
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  getTask,
  getTasksByProject,
  createTask,
  toggleTask,
  deleteTask
};
