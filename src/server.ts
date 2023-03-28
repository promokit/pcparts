import { connect, Error } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import config from './config';
import ApiError from './abstractions/ApiError';
import { serverConfig } from './graphql';
import { StatusCodes } from './models/enums/status_codes';

const { databaseURL, port } = config;

async function startServer() {
    if (!databaseURL) {
        return console.error('🔴 Database link is not provided');
    }

    process.on('uncaughtException', (err: Error) => {
        console.error('UNCAUGHT EXCEPTION!', err);
        process.exit(1);
    });

    try {
        await connect(databaseURL);
        console.info('🟢 DB connection is established');
    } catch (error: any) {
        throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            error?.MongoServerError,
            error?.codeName
        );
    }

    // "any" type used because no context here yet
    const server = new ApolloServer<any>(serverConfig);

    const { url } = await startStandaloneServer(server, { listen: { port } });

    console.log(`🟢 Server is ready at:\x1b[33m ${url}\x1b[0m`);

    process.on('unhandledRejection', (err: Error) => {
        console.error('UNHANDLED REJECTION!', err.name, err.message);
    });
}

startServer();
