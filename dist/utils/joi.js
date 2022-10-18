"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiValidate = exports.Joi = void 0;
const joi_1 = __importDefault(require("joi"));
exports.Joi = joi_1.default;
const joi_objectid_1 = __importDefault(require("joi-objectid"));
joi_1.default.objectId = (0, joi_objectid_1.default)(joi_1.default);
const joiValidate = (schema, obj) => {
    const { error, value } = schema.validate(obj);
    if (error)
        throw error;
    return value;
};
exports.joiValidate = joiValidate;
