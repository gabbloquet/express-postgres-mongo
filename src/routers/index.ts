import {Express, Request, Response} from 'express';
import sqlRouter from './user.sql.router';
import {createOneNoSql, deleteOneNoSql, getAllNoSql, getOneNoSql, updateOneNoSql} from './user.nosql.router';

export default (app: Express) => {
	app.get('/', (req: Request, res: Response) => {
		res.status(200).send('hello world!');
	});

	app.get('/ping', (req: Request, res: Response) => {
		res.status(200).send('pong');
	});

	app.use('/sql/users', sqlRouter);

	app.use('/nosql/users', getAllNoSql);
	app.use('/nosql/users/:id', getOneNoSql);
	app.use('/nosql/users', createOneNoSql);
	app.use('/nosql/users/:id', updateOneNoSql);
	app.use('/nosql/users/:id', deleteOneNoSql);
};
