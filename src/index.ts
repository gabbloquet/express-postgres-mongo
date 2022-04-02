import express, { Express, Request, Response } from 'express';
import { json } from 'body-parser';
import { getAll, getOne, createOne, updateOne, deleteOne } from './routers/user.router';
import sequelize from './database/sql';

import dotenv from 'dotenv';

const parser = json();
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
	res.status(200).send("hello world!");
});

app.get("/ping", (req: Request, res: Response) => {
	res.status(200).send("pong");
});

app.get('/users', parser, getAll);
app.get('/users/:id', parser, getOne);
app.post('/users', parser, createOne);
app.put('/users/:id', parser, updateOne);
app.delete('/users/:id', parser, deleteOne);

const start = async () => {
	try {
		await sequelize.sync(
			{ force: false } // Reset db every time
		);

		app.listen(port);
		console.log(`⚡️[server]: Server is running on port ${port}`);
	} catch (error) {
		console.log(error);
	}
};

start();