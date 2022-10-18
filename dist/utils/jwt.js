"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("../configs");
const generateToken = (data, secretKey) => {
    return jsonwebtoken_1.default.sign(data, secretKey, { expiresIn: configs_1.config.accessTokenExpiresIn });
};
exports.generateToken = generateToken;
const verifyToken = (token, secretKey) => {
    return jsonwebtoken_1.default.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
