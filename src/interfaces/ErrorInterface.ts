import { StatusCodes } from '../models/enums/status_codes';

export interface ErrorInterface {
    name: string;
    message: string;
    status: StatusCodes;
    isOperational?: boolean;
    stack?: string;
}
