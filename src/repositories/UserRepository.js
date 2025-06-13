const storage = require('../storage/data');
const User = require('../models/User');

class UserRepository {
  constructor() {
    this.users = storage.users;
    this.nextId = 1;
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.users.find(u => u.id === id);
  }

  create(name, email) {
    const user = new User(this.nextId++, name, email);
    this.users.push(user);
    return user;
  }

  delete(id) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new UserRepository();
