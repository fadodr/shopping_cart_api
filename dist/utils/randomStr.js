"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandStr = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateRandStr = (len) => {
    return crypto_1.default.randomBytes(len / 2).toString('hex');
};
exports.generateRandStr = generateRandStr;
