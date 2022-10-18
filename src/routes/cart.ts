import express from 'express';
const router = express.Router();

import { controllerHandler } from '../utils';
import { addToCart } from '../controllers/cart';

router.post('/', controllerHandler(addToCart));
router.get('/', );


export default router;