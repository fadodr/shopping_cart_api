import { ErrorRequestHandler } from "express";
import { ApiError } from "../errors";
import logger from "../logger";

export const errroHandler: ErrorRequestHandler =
    (error, req, res, next) => {
        let statusCode = 500;
        let message = 'internal server error';

        if (error instanceof ApiError) {
            console.log(error.message);
            statusCode = error.statusCode;
            message = error.message;
        }

        if (statusCode == 500) logger.error(error);
        res.status(statusCode).send({ error: message });
}