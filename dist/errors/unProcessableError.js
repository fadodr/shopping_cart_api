"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnProcessableError = void 0;
const apiError_1 = require("./apiError");
function parseErrorDetails(details) {
}
class UnProcessableError extends apiError_1.ApiError {
    constructor(details) {
        super('Invalid input');
        this._statusCode = 422;
        this._details = null;
        this._message = 'Invalid input';
        Object.setPrototypeOf(this, UnProcessableError.prototype);
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
exports.UnProcessableError = UnProcessableError;
;
