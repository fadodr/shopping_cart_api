import { ApiError, DetailsDescriptor } from './apiError';

function parseErrorDetails(details : any) {

}

export class UnProcessableError extends ApiError {
    _statusCode = 422;
    _message: string;
    _details=  null
    
    constructor(details : any) {
        super('Invalid input');
        this._message = 'Invalid input';

        Object.setPrototypeOf(this, UnProcessableError.prototype);
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