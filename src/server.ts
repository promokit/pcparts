import mongoose, { connect, Error } from 'mongoose';

import app from './app';
import config from './config';
import ApiError from './abstractions/ApiError';
import { StatusCodes } from './models/enums/status_codes';

async function startServer() {
    if (!config.databaseURL) {
        return console.error('Database link is not provided');
    }

    // Disable strictQuery; the `strictQuery` option will be switched back to `false` by default in Mongoose 7
    mongoose.set('strictQuery', false);

    process.on('uncaughtException', (err: Error) => {
        console.error('UNCAUGHT EXCEPTION!', err);
        process.exit(1);
    });

    try {
        await connect(config.databaseURL);
        console.info('Connection with DB is established');
    } catch (error: any) {
        throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            error?.MongoServerError,
            error?.codeName
        );
    }

    const server = app
        .listen(config.port, () => {
            console.log(
                `GraphQL endpoint:\x1b[33m http://localhost:${config.port}${config.api.graphql}\x1b[0m`
            );
        })
        .on('error', (err: Error) => {
            console.error(err);
            process.exit(1);
        });

    process.on('unhandledRejection', (err: Error) => {
        console.error('UNHANDLED REJECTION!', err.name, err.message);
        server.close(() => {
            process.exit(1);
        });
    });
}

startServer();
