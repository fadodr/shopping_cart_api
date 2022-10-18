"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const utils_1 = require("../utils");
const products_1 = require("../controllers/products");
router.post('/', (0, utils_1.controllerHandler)(products_1.addProduct));
router.get('/', (0, utils_1.controllerHandler)(products_1.fetchAllProducts));
router.get('/:prodId', (0, utils_1.controllerHandler)(products_1.findProduct));
router.patch('/:prodId', (0, utils_1.controllerHandler)(products_1.updateProduct));
router.delete('/:productId', (0, utils_1.controllerHandler)(products_1.deleteProduct));
exports.default = router;