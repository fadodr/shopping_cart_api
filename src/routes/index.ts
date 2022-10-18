import { Router } from 'express';
const router = Router();

import { isAuth } from '../middlewares';

import productRoute from './products';
import userRoute from './user';
import cartRoute from './cart';

router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/cart', cartRoute);


export default router;