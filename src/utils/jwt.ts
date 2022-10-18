import jwt from 'jsonwebtoken';
import { config } from '../configs';

export const generateToken =
    (data: { id: string }, secretKey: string) => {
    return jwt.sign(data, secretKey,
        { expiresIn: config.accessTokenExpiresIn });
}

export const verifyToken =
    (token: string, secretKey: string) => {
    return jwt.verify(token, secretKey);
}