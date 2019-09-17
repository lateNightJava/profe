import { Router } from 'express';
import { check, validationResult } from 'express-validator';
import { UserController } from '../../controllers';

const router = Router();

/*
  @route:   POST api/users
  @desc:    Create new user
  @access:  Public

  @route:   PATCH api/users
  @desc:    Update user info
  @access:  Private

  @route:   DELETE api/users
  @desc:    Delete user
  @access:  Private
*/
router.route('/')
  .post(UserController.validateCreateUser(), UserController.createUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

export default router;
