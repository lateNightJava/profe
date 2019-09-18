import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models';

export const getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(404).json({ errors: [{ msg: 'User does not exist. Please Sign Up or Login.' }] });
    }

    return res.status(200).json(user);
  }
  catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: 'Something went wrong...' }] });
  }
};

export const validateLoginUser = () => ([
  body('email', 'Please include a valid email.').isEmail(),
  body('password', 'Password is required.').not().isEmpty(),
]);

export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ errors: [{ msg: 'Please check email and password combination.' }] });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ errors: [{ msg: 'Please check email and password combination.' }] });
    }

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
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: 'Something went wrong...' }] });
  };
};
