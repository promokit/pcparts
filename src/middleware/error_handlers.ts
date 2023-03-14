import { Request, Response, NextFunction } from 'express';
import ApiError from '@/abstractions/ApiError';
import { StatusCodes } from '../models/enums/status_codes';
import { ErrorInterface } from '@/interfaces/ErrorInterface';

const defaultMessage = 'An error occurred during the request.';

const addErrorHandler = (
    err: ApiError,
    _: Request,
    res: Response,
    next: NextFunction
): void => {
    if (err) {
        const status: number = err.status || StatusCodes.INTERNAL_SERVER_ERROR;

        const body: ErrorInterface = {
            status,
            message: err.message || defaultMessage,
            name: err.name,
        };

        // If the environment is production then no need to send error stack trace
        if (process.env.NODE_ENV === 'development') {
            body.stack = err.stack;
        }

        res.status(status);
        res.send(body);
    }
    next();
};

export default addErrorHandler;
