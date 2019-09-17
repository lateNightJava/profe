import { Router } from 'express';
import { AuthController } from '../../controllers';
import { auth } from '../../middlewares';

const router = Router();

/*
  @route:   GET api/auth
  @desc:    Get auth user info
  @access:  Private

  @route:   POST api/auth
  @desc:    Login user
  @access:  Public
*/
router.route('/')
  .get(auth, AuthController.getAuthUser)
  .post(AuthController.validateLoginUser(), AuthController.loginUser);

export default router;
