const UserRepository = require('../repositories/UserRepository');

const getAllUsers = (req, res) => {
  res.json(UserRepository.getAll());
};

const getUser = (req, res) => {
  const user = UserRepository.getById(Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Name and email are required' });

  const user = UserRepository.create(name, email);
  res.status(201).json(user);
};

const deleteUser = (req, res) => {
  const deleted = UserRepository.delete(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};

module.exports = { getAllUsers, getUser, createUser, deleteUser };
