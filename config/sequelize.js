const config = require("./db.config");
const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const db = {};
// using sequalize
const sequalizeOptions = {
  host: config.host,
  dialect: config.dialect,
};

const sequelize = new Sequelize(
  config.db,
  config.user,
  config.password,
  sequalizeOptions
);

// connecting to db
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("Error while connecting..!");
  });

const modelDir = path.normalize(`${__dirname}/../src/models`);

fs.readdirSync(modelDir).forEach((file) => {
  const model = require(path.join(modelDir, file))(
    sequelize,
    Sequelize.DataTypes
  );
  db[model.name] = model;
});

// sync to db
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronised!");
  })
  .catch((error) => {
    console.log("An error occured while sync!");
  });

// assign sequelize, Sequelize to db object and returning the merged object
module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db
);
// console.log("seq", module);
module.exports.database = sequelize;
