"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePwdSchema = exports.resetPwdSchema = exports.forgotPwdSchema = exports.signupValSchema = void 0;
const utils_1 = require("../utils");
exports.signupValSchema = {
    inputSchema: utils_1.Joi.object().keys({
        name: utils_1.Joi.string().alphanum().min(3).max(30).required(),
        username: utils_1.Joi.string().required(),
        email: utils_1.Joi.string().email().required(),
        password: utils_1.Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    }),
};
exports.forgotPwdSchema = {
    inputSchema: utils_1.Joi.object().keys({
        email: utils_1.Joi.string().email().required()
    })
};
exports.resetPwdSchema = {
    inputSchema: utils_1.Joi.object().keys({
        resetToken: utils_1.Joi.string().length(8).required(),
        password: utils_1.Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    })
};
exports.changePwdSchema = {
    inputSchema: utils_1.Joi.object().keys({
        oldPassword: utils_1.Joi.string().required(),
        newPassword: utils_1.Joi.string()
            .min(8)
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required()
    })
};
