class Task {
  constructor(id, title, completed, projectId) {
    this.id = id;
    this.title = title;
    this.completed = completed || false;
    this.projectId = projectId;
  }
}

module.exports = Task;
