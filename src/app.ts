import express, { Express, Request, Response } from 'express';
import addErrorHandler from './middleware/error_handlers';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(addErrorHandler);

export default app;
