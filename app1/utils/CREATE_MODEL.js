const { DataTypes } = require("sequelize");
const db = require("../../config/sequelize");
const { sequelize } = db;

function CREATE_MODEL(newTableName, metadataArr) {
  const attributes = {};
  metadataArr.forEach((metadata) => {
    let temp = {};
    if (metadata.primaryKey) {
      if (metadata.columnDataType === "INTEGER") {
        temp = {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        };
      } else if (metadata.columnDataType === "STRING") {
        temp = {
          type: DataTypes.STRING,
          primaryKey: true,
        };
      } else if (metadata.columnDataType === "TEXT") {
        temp = {
          type: DataTypes.TEXT,
          primaryKey: true,
        };
      }
      attributes[metadata.columnName] = temp;
    } else {
      if (metadata.columnDataType === "INTEGER") {
        temp = {
          type: DataTypes.INTEGER,
          primaryKey: false,
        };
      } else if (metadata.columnDataType === "STRING") {
        temp = {
          type: DataTypes.STRING,
          primaryKey: false,
        };
      } else if (metadata.columnDataType === "TEXT") {
        temp = {
          type: DataTypes.TEXT,
          primaryKey: false,
        };
      } else if (metadata.columnDataType === "DOUBLE") {
        temp = {
          type: DataTypes.DOUBLE,
          primaryKey: false,
        };
      } else if (metadata.columnDataType === "BOOLEAN") {
        temp = {
          type: DataTypes.BOOLEAN,
          primaryKey: false,
        };
      }
      attributes[metadata.columnName] = temp;
    }
  });
  const newTable = sequelize.define(`${newTableName}`, attributes, {
    tableName: `${newTableName}`,
  });
  // newTable.sync();
  return newTable;
}
// const newTableModel = CREATE_MODEL();
// console.log("Anand", newTableModel);
// newTableModel.sync();
module.exports = { CREATE_MODEL };
