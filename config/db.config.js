const CONSTANTS = require("./const");
module.exports = {
  host: CONSTANTS.DATABASE_HOST,
  user: CONSTANTS.DATABASE_USERNAME,
  password: CONSTANTS.DATABASE_PASSWORD,
  db: CONSTANTS.DATABASE_SCHEMA,
  dialect: CONSTANTS.DATABASE_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
