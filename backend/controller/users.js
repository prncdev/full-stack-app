const { users }= require("../model/users");


const getUsers =  async function(req, res) { 
  const user = await users.find();
  res.status(200).json(user);
}

const register = async function(req, res) {
  const { name, email, password, role } = req.body;

  if(!name || !email || !password) {
    res.status(400).json({ message: 'fields cannot be empty'});
  }

  const user = { name, email, password, role };
  const newUser = await users.create(user);
  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  register,
}