"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const apiError_1 = require("./apiError");
class BadRequestError extends apiError_1.ApiError {
    constructor(message) {
        super(message);
        this._statusCode = 400;
        this._details = null;
        this._message = message;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    get statusCode() {
        return this._statusCode;
    }
    get message() {
        return this._message;
    }
    get details() {
        return this._details;
    }
}
exports.BadRequestError = BadRequestError;
;
