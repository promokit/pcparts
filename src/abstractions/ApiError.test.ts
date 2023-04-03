import { StatusCodes } from '../models/enums/status_codes';
import ApiError from './ApiError';

describe('ApiError class', () => {
    it('has correct properties when constructed', () => {
        const status = StatusCodes.NOT_FOUND;
        const message = 'Resource not found';

        const error = new ApiError(status, message);

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(ApiError);
        expect(error.status).toBe(status);
        expect(error.message).toBe(message);
        expect(error.name).toBe('ApiError');
        expect(error.isOperational).toBe(true);
        expect(error.stack).toBeDefined();
    });

    it('can be constructed with custom name and operational status', () => {
        const status = StatusCodes.BAD_REQUEST;
        const message = 'Invalid request';
        const name = 'CustomApiError';
        const isOperational = false;

        const error = new ApiError(status, message, name, isOperational);

        expect(error.status).toBe(status);
        expect(error.message).toBe(message);
        expect(error.name).toBe(name);
        expect(error.isOperational).toBe(isOperational);
    });
});
