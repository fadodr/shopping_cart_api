"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateError = void 0;
const apiError_1 = require("./apiError");
class DuplicateError extends apiError_1.ApiError {
    constructor(message) {
        super(message);
        this._statusCode = 409;
        this._details = null;
        this._message = message;
        Object.setPrototypeOf(this, DuplicateError.prototype);
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
exports.DuplicateError = DuplicateError;
;
