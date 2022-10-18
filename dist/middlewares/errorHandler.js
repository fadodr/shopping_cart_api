"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errroHandler = void 0;
const errors_1 = require("../errors");
const logger_1 = __importDefault(require("../logger"));
const errroHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = 'internal server error';
    if (error instanceof errors_1.ApiError) {
        console.log(error.message);
        statusCode = error.statusCode;
        message = error.message;
    }
    if (statusCode == 500)
        logger_1.default.error(error);
    res.status(statusCode).send({ error: message });
};
exports.errroHandler = errroHandler;
