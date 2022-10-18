import { ApiError, DetailsDescriptor } from './apiError';

export class DuplicateError extends ApiError {
    _statusCode = 409;
    _message: string;
    _details = null;
    
    constructor(message : string) {
        super(message);
        this._message = message;

        Object.setPrototypeOf(this, DuplicateError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get message(): string {
        return this._message;
    }

    get details(): DetailsDescriptor {
        return this._details;
    }
};