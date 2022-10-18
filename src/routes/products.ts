import { Router } from 'express';
const router = Router();

import { controllerHandler } from '../utils';

import {
    addProduct,
    fetchAllProducts,
    findProduct,
    updateProduct,
    deleteProduct
} from '../controllers/products';

router.post('/', controllerHandler(addProduct));
router.get('/', controllerHandler(fetchAllProducts));
router.get('/:prodId', controllerHandler(findProduct))
router.patch('/:prodId', controllerHandler(updateProduct));
router.delete('/:productId', controllerHandler(deleteProduct));

export default router;