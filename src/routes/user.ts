import { Router } from 'express'
const router = Router();

import { controllerHandler } from '../utils';
import {
    signup,
    login,
    forgotPassword,
    resetPassword,
    changePassword
} from '../controllers/user';

import { 
    signupValSchema,
    forgotPwdSchema,
    resetPwdSchema,
    changePwdSchema
} from '../validations';

router.post('/signup', controllerHandler(signup, signupValSchema));
router.post('/login', controllerHandler(login));
router.post('/forgotpassword', controllerHandler(forgotPassword, forgotPwdSchema));
router.post('/resetpassword', controllerHandler(resetPassword, resetPwdSchema));
router.post('/changepassword', controllerHandler(changePassword, changePwdSchema));

export default router;