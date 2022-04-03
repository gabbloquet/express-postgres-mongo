import {Request, Response, Router} from 'express';
import User from '../database/sql/models';

const router = Router();

router.post('/', (req: Request, res: Response) => {
	const userToCreate = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	User.create(userToCreate)
		.then(user => {
			console.log('[SQL] User created : ', user);
			return res.status(201).json(user);
		})
		.catch(error => {
			console.log('[SQL] User creation failed ', error);
			return res.status(500).json(error);
		});
});

router.get('/', (req: Request, res: Response) => {
	User.findAll()
		.then(users => {
			console.log('[SQL] All Users : ', users);
			return res.status(200).json(users);
		})
		.catch((error) => {
			console.log('[SQL] Get all users failed :', error);
			return res.status(500).json(error);
		});
});

router.get('/:id', (req: Request, res: Response) => {
	User.findByPk(req.params.id)
		.then(user => {
			console.log('[SQL] Get user : ', user);
			return res.status(200).json(user);
		})
		.catch(error => {
			console.log('[SQL] Impossible to get User : ', error);
			return res.status(500).json(error);
		});
});

router.put('/:id', (req: Request, res: Response) => {
	const userToUpdate = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	User.update(userToUpdate, { where: { id: req.params.id } })
		.then(user => {
			console.log('[SQL] update USER: ', user);
			return res.status(200).json(user);
		})
		.catch(error => {
			console.log('ERROR in updateOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
});

router.delete('/:id', (req: Request, res: Response) => {
	User.destroy({ where: { id: req.params.id } })
		.then(() => {
			console.log('[SQL] Delete user done');
			return res.status(204).end();
		})
		.catch(error => {
			console.log('ERROR in deleteOne ' + 'USER:', error);
			return res.status(500).json(error);
		});
});

export default router;