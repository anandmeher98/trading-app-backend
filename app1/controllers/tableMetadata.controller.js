const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../../config/sequelize");
const CREATE_MODEL = require("../utils/CREATE_MODEL");
const { sequelize } = db;
// destructuring MetadataTable model for creating instance
const { MetadataTable } = db;

function saveTableInfo(req, res) {
  console.log("saveTableInfo");
  const newTableName = req.body.name;
  const projectId = req.body.projectId;
  const metadataArr = req.body.tableMetaData;

  const newTable = CREATE_MODEL.CREATE_MODEL(newTableName, metadataArr);

  // console.log("Hey CONTROLLER!", newTable);
  newTable.sync();
  // insert to tableInfo

  // metadata table

  res.send("table created");
}

function updateTableInfo(req, res) {
  console.log("updateTableInfo");
}
function createSchema(req, res) {
  console.log("updateTableInfo");
}
function checkIfSchemaExist(req, res) {
  console.log("updateTableInfo");
}
function getTableInfo(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function deleteTable(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function getTableByProjectId(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function getTableByConnectionId(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function getAllTableInfo(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function addColumn(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function deleteColumn(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}
function getMetaDataByTableId(req, res) {
  // tableInfoWithmetadata, tableId
  console.log("updateTableInfo");
}

module.exports = {
  saveTableInfo,
};
