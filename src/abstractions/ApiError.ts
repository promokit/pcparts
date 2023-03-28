import { ErrorInterface } from '../interfaces/ErrorInterface';
import { StatusCodes } from '../models/enums/status_codes';

class ApiError extends Error implements ErrorInterface {
    public readonly status: StatusCodes;
    public readonly message: string;
    public readonly name: string;
    public readonly isOperational: boolean;

    constructor(
        status: StatusCodes,
        message: string,
        name: string = 'ApiError',
        isOperational: boolean = true
    ) {
        super();
        this.status = status;
        this.message = message;
        this.name = name;
        this.isOperational = isOperational;

        // Without passing constructor to captureStackTrace, the Error
        // frame would show up in the .stack property. By passing
        // the constructor, we omit that frame, and retain all frames below it.
        Error.captureStackTrace(this, this.constructor);
    }
}

export default ApiError;
