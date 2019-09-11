import { User } from '../models/index.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  }
  catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createNewUser = async (req, res) => {
  const user = new User(userParams(req.body));

  try {
    const newUser = await user.save();
    return res.status(201).json(newUser);
  }
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {

  }
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


const userParams = ({ email, password, accountType }) => ({
  email,
  password,
  accountType,
});
