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
import { UserController } from '../controllers/index.js';

const router = Router();

router.route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createNewUser);

router.route('/:userId')
  .delete(UserController.deleteUser);


export default router;
