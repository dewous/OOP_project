const storage = require('../storage/data');
const Task = require('../models/Task');

class TaskRepository {
  constructor() {
    this.tasks = storage.tasks;
    this.nextId = 1;
  }

  getAll() {
    return this.tasks;
  }

  getById(id) {
    return this.tasks.find(t => t.id === id);
  }

  getByProjectId(projectId) {
    return this.tasks.filter(t => t.projectId === projectId);
  }

  create(title, projectId) {
    const task = new Task(this.nextId++, title, false, projectId);
    this.tasks.push(task);
    return task;
  }

  toggleComplete(id) {
    const task = this.getById(id);
    if (task) {
      task.completed = !task.completed;
      return task;
    }
    return null;
  }

  delete(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new TaskRepository();
