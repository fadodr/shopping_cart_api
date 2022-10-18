"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const apiError_1 = require("./apiError");
class NotFoundError extends apiError_1.ApiError {
    constructor(message) {
        super(message);
        this._statusCode = 404;
        this._details = null;
        this._message = message;
        Object.setPrototypeOf(this, NotFoundError.prototype);
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
exports.NotFoundError = NotFoundError;
