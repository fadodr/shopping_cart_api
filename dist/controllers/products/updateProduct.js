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
exports.updateProduct = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const updateProduct = ({ params, input }) => __awaiter(void 0, void 0, void 0, function* () {
    const { prodId } = params;
    const { title, description, price } = input;
    const product = yield models_1.Product.findOne({ where: { id: prodId } });
    if (!product)
        throw new errors_1.NotFoundError('product not found');
    product.set({
        title,
        description,
        price
    });
    yield product.save();
    return {
        message: 'product updated successfully',
        data: product
    };
});
exports.updateProduct = updateProduct;
