import express from 'express';
import mountRoutes from './routers';
import { initNoSqlDatabase } from './database/nosql';
import sequelizeSql from './database/sql';

import dotenv from 'dotenv';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

/**
 * Server configuration
 */
server.disable('x-powered-by');
server.use(express.static('dist'));
server.use(express.json());

mountRoutes(server);

sequelizeSql.sync({ force: false })
	.then(() => console.log('⚡️[DATABASE]: SQL database is running'))
	.catch((error) => console.error('️[DATABASE]: SQL database launch failed', error));

initNoSqlDatabase()
	.then(() => console.log('⚡️[DATABASE]: NoSQL database is running'))
	.catch((error) => console.error('️[DATABASE]: NoSQL database launch failed', error));

server.listen(port, () => console.log(`⚡️[server]: Server is running on port ${port}`));
