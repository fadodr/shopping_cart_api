"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedError = void 0;
const apiError_1 = require("./apiError");
class UnAuthorizedError extends apiError_1.ApiError {
    constructor(message) {
        super(message);
        this._statusCode = 403;
        this._details = null;
        this._message = message;
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
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
exports.UnAuthorizedError = UnAuthorizedError;
;
