// connecting to db
const db = require("../../config/sequelize");

// destructuring Journal model for creating instance
const { Transaction } = db;

function getAllJournals(req, res, next) {
  console.log("Get all journals!");
  Transaction.findAll()
    .then((journals) => {
      if (journals.length) {
        res.send(journals);
      } else {
        res.send("No journals!");
      }
    })
    .catch((e) => console.log(e));
}
