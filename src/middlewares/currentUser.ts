import e, { RequestHandler } from "express";
import { verifyToken } from '../utils';
import { config } from '../configs';
import { ForbiddenError, NotFoundError } from "../errors";
import { User } from "../models";

export const currentUser : RequestHandler = async (req, res, next) => {
    const tokenHeader = req.get('Authorization');
    let user: User | null;
    if (!tokenHeader) {
        req.user = null;
        return next();
    }
    const token = tokenHeader.split(' ')[1];
    let tokenDetails;
    try {
        tokenDetails =
            verifyToken(token, config.jwtAccessTokenSecret) as { id: string };
        user = await User.findByPk(tokenDetails.id);
        if (!user) throw new NotFoundError('user not found');
    } catch (err : any) {
        req.user = null;
        if (err instanceof NotFoundError) {
            return next(err);
        }
        const error = new ForbiddenError(err.message);
        return next(error);
    }
    req.user = user;
    next();
}