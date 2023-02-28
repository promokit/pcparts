import dotenv from 'dotenv';
import ApiError from '../abstractions/ApiError';
import { StatusCodes } from '../models/enums/status_codes';
import { AppConfigInterface } from '../interfaces/AppConfigInterface';

// Set the env to 'development' as default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        '⚠️ Could not find .env file ⚠️'
    );
}

const { APP_PORT, DB_LINK, DB_USERNAME, DB_PASSWORD } = process.env;

const config: AppConfigInterface = {
    port: Number(APP_PORT) || 3000,
    databaseURL: DB_LINK?.replace(
        '<CREDENTIALS>',
        `${DB_USERNAME}:${DB_PASSWORD}`
    ),
    api: {
        prefix: '/api/v1',
        graphql: '/graphql',
    },
    db: {
        requests: {
            limit: 10,
        },
    },
};

export default config;
