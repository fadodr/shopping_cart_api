"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const addToCart = ({ input, user }) => __awaiter(void 0, void 0, void 0, function* () {
    const { prodId } = input;
    console.log(prodId);
    let newQty = 1;
    let product;
    const existProd = yield models_1.Product.findByPk(prodId);
    if (!existProd)
        throw new errors_1.NotFoundError('product not found');
    let userCart = yield user.getCart();
    if (!userCart) {
        userCart = yield user.createCart();
    }
    const products = yield userCart.getProducts({ where: { id: prodId } });
    if (products.length > 0) {
        product = products[0];
        const oldQty = product.CartItem.quantity;
        console.log(oldQty);
        newQty = oldQty + 1;
    }
    userCart.addProduct(product !== null && product !== void 0 ? product : existProd, { through: { quantity: newQty } });
    return {
        message: 'Done successfully'
    };
});
exports.addToCart = addToCart;
