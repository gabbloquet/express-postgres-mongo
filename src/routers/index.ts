import {Express, Request, Response} from 'express';
import {createOneSql, deleteOneSql, getAllSql, getOneSql, updateOneSql} from './user.sql.router';
import {createOneNoSql, deleteOneNoSql, getAllNoSql, getOneNoSql, updateOneNoSql} from './user.nosql.router';

export default (app: Express) => {
	app.get('/', (req: Request, res: Response) => {
		res.status(200).send('hello world!');
	});

	app.get('/ping', (req: Request, res: Response) => {
		res.status(200).send('pong');
	});

	app.get('/sql/users', getAllSql);
	app.get('/sql/users/:id', getOneSql);
	app.post('/sql/users', createOneSql);
	app.put('/sql/users/:id', updateOneSql);
	app.delete('/sql/users/:id', deleteOneSql);

	app.get('/nosql/users', getAllNoSql);
	app.get('/nosql/users/:id', getOneNoSql);
	app.post('/nosql/users', createOneNoSql);
	app.put('/nosql/users/:id', updateOneNoSql);
	app.delete('/nosql/users/:id', deleteOneNoSql);
};
