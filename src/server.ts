import mongoose, { connect, Error } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import config from './config';
import ApiError from './abstractions/ApiError';
import { StatusCodes } from './models/enums/status_codes';
import { serverConfig } from './graphql';

const { databaseURL, port } = config;

interface MyContext {}

async function startServer() {
    if (!databaseURL) {
        return console.error('Database link is not provided');
    }

    // Disable strictQuery; the `strictQuery` option will be switched back to `false` by default in Mongoose 7
    mongoose.set('strictQuery', false);

    process.on('uncaughtException', (err: Error) => {
        console.error('UNCAUGHT EXCEPTION!', err);
        process.exit(1);
    });

    try {
        await connect(databaseURL);
        console.info('📀 Connection with DB is established');
    } catch (error: any) {
        throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            error?.MongoServerError,
            error?.codeName
        );
    }

    const server = new ApolloServer<any>(serverConfig);

    const { url } = await startStandaloneServer(server, { listen: { port } });

    console.log(`🚀 Server ready at:\x1b[33m ${url}\x1b[0m`);

    process.on('unhandledRejection', (err: Error) => {
        console.error('UNHANDLED REJECTION!', err.name, err.message);
    });
}

startServer();
