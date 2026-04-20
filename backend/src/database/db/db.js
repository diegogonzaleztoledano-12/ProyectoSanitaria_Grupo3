const { Sequelize } = require('sequelize');
require('dotenv').config();
console.log('DIALECT:', process.env.DB_DIALECT);
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'mysql', 
		port: process.env.DB_PORT,
	}
);

module.exports = sequelize;