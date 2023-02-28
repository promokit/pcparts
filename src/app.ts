import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';

import config from './config';
import schema from './graphql';
import ApiError from './abstractions/ApiError';
import addErrorHandler from './middleware/error_handlers';
import { StatusCodes } from './models/enums/status_codes';

const app: Express = express();

app.use(
    config.api.graphql,
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.all('*', (req, _, next) => {
    next(
        new ApiError(
            StatusCodes.NOT_FOUND,
            `Can't find ${req.originalUrl} on this server!`
        )
    );
});

app.use(addErrorHandler);

export default app;
