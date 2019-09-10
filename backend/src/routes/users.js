/*
  User Schema
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "Instructor",
    },
  }
*/

import { Router } from 'express';
import { User } from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = User.find();
    return res.status(200).json(users);
  }
  catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    type: req.body.accountType,
  });

  try {
    const newUser = await user.save();
    return res.status(200).json(newUser);
  }
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.delete('/', (req, res) => {

});

export default router;
