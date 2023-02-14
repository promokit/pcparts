import { AppConfigInterface } from '@/interfaces/AppConfigInterface';
import dotenv from 'dotenv';

// Set the env to 'development' as default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("⚠️ Couldn't find .env file ⚠️");
}

const { APP_PORT, DB_LINK, DB_USERNAME, DB_PASSWORD } = process.env;

const config: AppConfigInterface = {
    /**
     * Application port
     */
    port: Number(APP_PORT) || 3000,
    /**
     * Application database link
     */
    databaseURL: DB_LINK?.replace(
        '<CREDENTIALS>',
        `${DB_USERNAME}:${DB_PASSWORD}`
    ),
    /**
     * Application API prefix
     */
    api: {
        prefix: '/api',
    },
};

export default config;
