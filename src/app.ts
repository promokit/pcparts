import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';

import config from './config';
import schema from './graphql';
import addErrorHandler from './middleware/error_handlers';

const app: Express = express();

app.use(
    config.api.graphql,
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.all('*', (_, res) => {
    const link = `http://localhost:${config.port}${config.api.graphql}`;
    res.header('Content-type', 'text/html');
    res.end(`<h3>GraphQL endpoint — <a href="${link}">${link}</a></h3>`);
});

app.use(addErrorHandler);

export default app;
