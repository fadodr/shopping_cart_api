"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const utils_1 = require("../utils");
const cart_1 = require("../controllers/cart");
router.post('/add', (0, utils_1.controllerHandler)(cart_1.addToCart));
exports.default = router;
