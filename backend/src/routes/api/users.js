import { Router } from 'express';
import { check, validationResult } from 'express-validator';
import { UserController } from '../../controllers/index.js';


const router = Router();

/*
  @route:   POST api/users
  @desc:    Create a new user
  @access:  Public
*/
router.route('/')
  // .get(UserController.getAllUsers)
  .post(
    UserController.validateCreateUser(),
    UserController.createUser
  );

router.route('/:userId')
  .patch(
    // UserController.validateUpdateUser(),
    UserController.updateUser,
  )
  .delete(
    UserController.validateDeleteUser(),
    UserController.deleteUser
  );


export default router;
