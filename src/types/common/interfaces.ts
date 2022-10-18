import { IncomingHttpHeaders } from 'http';
import { User } from '../../models';
import { ReqUser } from './types';

export interface ControllerArgs {
    input: any;
    params: any;
    query: any;
    user: User | undefined | null;
    headers : IncomingHttpHeaders
}

export interface ValidationSchema {
    inputSchema?: any;
    querySchema?: any;
    paramsSchema? : any
}

/*export interface DUser {
    id: string;
    name: string;
    email: string;
    username: string;
    password : string;
    resetToken?: string;
    resetTokenExpiresIn? : Date
}*/

export interface DProduct {
    id: string;
    title: string;
    description?: string;
    price: number;
}

export interface DCart {
    id: string,
    userId? : string
}