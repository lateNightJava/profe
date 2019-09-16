import { body, param, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

export const validateCreateUser = () => ([
  body('name', 'Please provide a name.').not().isEmpty(),
  body('email', 'Please provide a valid email.').isEmail(),
  body('password', 'Please provide a password with 6 or more characters.').isLength({ min: 6 }),
  body('accountType', 'Please provide a valid account type.').isIn(['instructor', 'client']),
]);

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'This account already exists. Please sign in.' }] });
    }

    user = new User({ name, email, password, accountType });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({ token });
      }
    );
  }
  catch (err) {
    return res.status(500).json({ errors: [{ msg: 'Something went wrong...' }] });
  }
};

export const updateUser = async (req, res) => {

};

export const validateDeleteUser = () => ([
  param('userId', 'Please provide user id').exists(),
]);

export const deleteUser = async (req, res) => {
  try {

  }
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
