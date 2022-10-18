import { ApiError, DetailsDescriptor } from './apiError';

export class BadRequestError extends ApiError {
    _statusCode = 400;
    _message: string;
    _details = null;
    
    constructor(message : string) {
        super(message);
        this._message = message;

        Object.setPrototypeOf(this, BadRequestError.prototype);
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