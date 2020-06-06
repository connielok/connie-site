const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log(`Opening database connection to ${dbName}`);

const databaseUrl =
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`;

const db = new Sequelize(databaseUrl, {
  logging: false,
});

module.exports = db;
