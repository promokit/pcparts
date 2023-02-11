import express, { Express, Request, Response } from 'express';
import { Storage } from './models';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/storage', async (req, res) => {
    res.send('GET request to the homepage');
    const resp = await Storage.findOne({
        _id: '63e6908e3f78ce303c637498',
    }).populate({
        path: 'brand',
        select: 'name',
    });
    console.log('resp', resp);
});

export default app;
