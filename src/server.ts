import { connect } from 'mongoose';

import app from './app';
import config from './config';
import ApiError from './abstractions/ApiError';
import { StatusCodes } from './models/enums/status_codes';

async function startServer() {
    if (!config.databaseURL) {
        return console.error('Database link is not provided');
    }

    process.on('uncaughtException', (err: Error) => {
        console.log('UNCAUGHT EXCEPTION!', err.name, err.message);
        process.exit(1);
    });

    try {
        await connect(config.databaseURL);
        console.info('Connection with DB is established');
    } catch (error: any) {
        throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            error.MongoServerError,
            error.codeName
        );
    }

    const server = app
        .listen(config.port, () => {
            console.log(
                `Server is running at: http://localhost:${config.port}/`
            );
        })
        .on('error', (err: Error) => {
            console.error(err);
            process.exit(1);
        });

    process.on('unhandledRejection', (err: Error) => {
        console.log('UNHANDLED REJECTION!', err.name, err.message);
        server.close(() => {
            process.exit(1);
        });
    });
}

startServer();
