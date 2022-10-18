import crypto from 'crypto';

export const generateRandStr = (len : number) => {
    return crypto.randomBytes(len / 2).toString('hex');
}