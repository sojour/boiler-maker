const Sequelize = require('sequelize');

//be sure to augment the db name if necessary

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boiler-maker', {
  logging: false
});

module.exports = db;
