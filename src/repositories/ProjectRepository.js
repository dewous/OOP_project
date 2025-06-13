const storage = require('../storage/data');
const Project = require('../models/Project');

class ProjectRepository {
  constructor() {
    this.projects = storage.projects;
    this.nextId = 1;
  }

  getAll() {
    return this.projects;
  }

  getById(id) {
    return this.projects.find(p => p.id === id);
  }

  getByUserId(userId) {
    return this.projects.filter(p => p.userId === userId);
  }

  create(name, userId) {
    const project = new Project(this.nextId++, name, userId);
    this.projects.push(project);
    return project;
  }

  delete(id) {
    const index = this.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projects.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new ProjectRepository();
