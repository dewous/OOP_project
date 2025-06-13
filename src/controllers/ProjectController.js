const ProjectRepository = require('../repositories/ProjectRepository');

const getAllProjects = (req, res) => {
  res.json(ProjectRepository.getAll());
};

const getProject = (req, res) => {
  const project = ProjectRepository.getById(Number(req.params.id));
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
};

const getProjectsByUser = (req, res) => {
  const userId = Number(req.params.userId);
  res.json(ProjectRepository.getByUserId(userId));
};

const createProject = (req, res) => {
  const { name, userId } = req.body;
  if (!name || !userId) return res.status(400).json({ message: 'Name and userId are required' });

  const project = ProjectRepository.create(name, userId);
  res.status(201).json(project);
};

const deleteProject = (req, res) => {
  const deleted = ProjectRepository.delete(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'Project not found' });
  res.status(204).send();
};

module.exports = {
  getAllProjects,
  getProject,
  getProjectsByUser,
  createProject,
  deleteProject
};
