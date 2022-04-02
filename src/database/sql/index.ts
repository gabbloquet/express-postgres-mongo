const Sequelize = require('sequelize')

const sequelizeInstance = new Sequelize('postgres://postgresuser:postgrespass@127.0.0.1:5432/postgres')

export default sequelizeInstance;