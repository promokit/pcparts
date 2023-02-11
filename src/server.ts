import { connect } from 'mongoose';

import app from './app';
import config from './config';

async function startServer() {
    if (!config.databaseURL) {
        return console.error('Database link is not provided');
    }
    try {
        await connect(config.databaseURL);
        console.info('Connection with DB is established');
    } catch (error: any) {
        throw new Error(error);
    }

    app.listen(config.port, () => {
        console.log(`Server is running at: http://localhost:${config.port}/`);
    }).on('error', (err: string) => {
        console.error(err);
        process.exit(1);
    });
}

startServer();
