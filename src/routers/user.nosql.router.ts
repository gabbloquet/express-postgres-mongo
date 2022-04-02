import { Request, Response } from 'express';
import { User, UserModel } from '../database/nosql/models';

export async function createOneNoSql(req: Request, res: Response) {
	console.log('createOne: [POST] /users/');

	const USER_MODEL = {
		id: req.body.id,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	new UserModel(USER_MODEL)
		.save()
		.then((user: User) => {
			console.log('OK createOne USER: ', user);
			return res.status(201).json(user);
		})
		.catch((error: any) => {
			console.error('ERROR in createOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
}

export async function getAllNoSql(req: Request, res: Response) {
	console.log('getAll: [GET] /users/');

	UserModel.find({})
		.then((users: Array<User>) => {
			console.log('OK getAll USER: ', users);
			return res.status(200).json(users);
		})
		.catch((error) => {
			console.error('ERROR in getAll ' + 'USER:', error);
			return res.status(500).json(error);
		});
}

export async function getOneNoSql(req: Request, res: Response) {
	console.log('getOne: [GET] /users/:id');

	UserModel.find({ id: req.params.id })
		.then((user) => {
			console.error('OK getOne USER: ', user);
			return res.status(200).json(user);
		})
		.catch((error) => {
			console.log('ERROR in getOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
}

export async function updateOneNoSql(req: Request, res: Response) {
	console.log('updateOne: [PUT] /users/:id');

	const USER_MODEL = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	UserModel.updateOne({ id: req.params.id }, USER_MODEL)
		.then((user) => {
			console.error('OK updateOne USER: ', user);
			return res.status(200).json(user);
		})
		.catch((error) => {
			console.log('ERROR in updateOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
}

export async function deleteOneNoSql(req: Request, res: Response) {
	console.log('[DELETE] /users/:id');

	UserModel.deleteOne({ id: req.params.id })
		.then(() => {
			console.log('OK deleteOne USER: ');
			return res.status(204).end();
		})
		.catch((error) => {
			console.error('ERROR in deleteOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
}