// connecting to db
const db = require("../../config/sequelize");

// destructuring Table model for creating instance
const { Table } = db;
// console.log(db);

function getTable(req, res) {
  console.log("getTableMetadata!");
  // res.send("getTableMetadata");
  Table.findAll().then((metadata) => {
    console.log(metadata);
  });
}

function updateProjectTables(req, res) {
  console.log("update Metadata!");
  // res.send("getTableMetadata");
}
getTable();
updateProjectTables();
