import { Express, Request, Response } from 'express';
import sqlRouter from './user.sql.router';
import noSqlRouter from './user.nosql.router';

export default (app: Express) => {
	app.get('/', (_, res: Response) => res.status(200).send('hello world!'));
	app.get('/ping', (_, res: Response) => res.status(200).send('pong'));
	app.use('/sql/users', sqlRouter);
	app.use('/nosql/users', noSqlRouter);
};
