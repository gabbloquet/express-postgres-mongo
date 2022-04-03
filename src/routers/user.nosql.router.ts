import {Request, Response, Router} from 'express';
import { User, UserModel } from '../database/nosql/models';

const router = Router();

router.post('/', (req: Request, res: Response) => {
	const userToCreate = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	new UserModel(userToCreate)
		.save()
		.then((user: User) => {
			console.log('[NoSQL] User created : ', user);
			return res.status(201).json(user);
		})
		.catch((error: any) => {
			console.log('[NoSQL] User creation failed ', error);
			return res.status(500).json(error);
		});
});

router.get('/', (req: Request, res: Response) => {
	UserModel.find({})
		.then(users => {
			console.log('[NoSQL] All Users : ', users);
			return res.status(200).json(users);
		})
		.catch((error) => {
			console.log('[NoSQL] Get all users failed :', error);
			return res.status(500).json(error);
		});
});

router.get('/:id', (req: Request, res: Response) => {
	UserModel.find({ id: req.params.id })
		.then(user => {
			console.log('[NoSQL] Get user : ', user);
			return res.status(200).json(user);
		})
		.catch(error => {
			console.log('[NoSQL] Impossible to get User : ', error);
			return res.status(500).json(error);
		});
});

router.put('/:id', (req: Request, res: Response) => {
	const userToUpdate = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	UserModel.updateOne({ id: req.params.id }, userToUpdate)
		.then(user => {
			console.log('[NoSQL] update USER: ', user);
			return res.status(200).json(user);
		})
		.catch(error => {
			console.log('[NoSQL] Impossible to update user ', error);
			return res.status(500).json(error);
		});
});

router.delete('/:id', (req: Request, res: Response) => {
	UserModel.deleteOne({ id: req.params.id })
		.then(() => {
			console.log('[NoSQL] Delete user done');
			return res.status(204).end();
		})
		.catch(error => {
			console.log('[NoSQL] Impossible to delete user ', error);
			return res.status(500).json(error);
		});
});

export default router;