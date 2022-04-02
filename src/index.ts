import express, { Express, Request, Response } from 'express';
import { json } from 'body-parser';
import {
	createOneSql,
	deleteOneSql,
	getAllSql,
	getOneSql,
	updateOneSql,
} from './routers/user.sql.router';
import {
	createOneNoSql,
	deleteOneNoSql,
	getAllNoSql,
	getOneNoSql,
	updateOneNoSql,
} from './routers/user.nosql.router';
import { initNoSqlDatabase } from './database/nosql';
import sequelizeSql from './database/sql';

import dotenv from 'dotenv';

const parser = json();
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('hello world!');
});

app.get('/ping', (req: Request, res: Response) => {
	res.status(200).send('pong');
});

app.get('/sql/users', parser, getAllSql);
app.get('/sql/users/:id', parser, getOneSql);
app.post('/sql/users', parser, createOneSql);
app.put('/sql/users/:id', parser, updateOneSql);
app.delete('/sql/users/:id', parser, deleteOneSql);

app.get('/nosql/users', parser, getAllNoSql);
app.get('/nosql/users/:id', parser, getOneNoSql);
app.post('/nosql/users', parser, createOneNoSql);
app.put('/nosql/users/:id', parser, updateOneNoSql);
app.delete('/nosql/users/:id', parser, deleteOneNoSql);

const start = async () => {
	try {
		await sequelizeSql.sync(
			{ force: false } // Reset db every time
		);
		console.log('⚡️[DATABASE]: SQL database is running');

		initNoSqlDatabase().then(() => console.log('⚡️[DATABASE]: NoSQL database is running'));

		app.listen(port);
		console.log(`⚡️[server]: Server is running on port ${port}`);
	} catch (error) {
		console.log(error);
	}
};

start();
