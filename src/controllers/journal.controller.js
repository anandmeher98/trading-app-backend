// connecting to db
const db = require("../../config/sequelize");

// destructuring Journal model for creating instance
const { Journal } = db;

function getAllJournals(req, res, next) {
  console.log("Get all journals!");
  Journal.findAll()
    .then((journals) => {
      if (journals.length) {
        res.send(journals);
      } else {
        res.send([]);
      }
    })
    .catch((e) => console.log(e));
}

function getJournalById(req, res, next) {
  console.log("Get journal!");
  Journal.findByPk()
    .then((journal) => {
      if (journal.length) {
        res.send(journal);
      } else {
        res.send("No journals!");
      }
    })
    .catch((e) => console.log(e));
}

function addJournal(req, res, next) {
  const journal = Journal.build(req.body);
  journal.save().then((savedJournal) => {
    res.send(savedJournal);
  });
}

function updateJournal(req, res, next) {
  console.log("update journals!");
  Journal.findAll()
    .then((journals) => {
      if (journals.length) {
        res.send(journals);
      } else {
        res.send("No journals!");
      }
    })
    .catch((e) => console.log(e));
}
function deleteJournal(req, res, next) {
  console.log("delete journals!");
  Journal.findAll()
    .then((journals) => {
      if (journals.length) {
        res.send(journals);
      } else {
        res.send("No journals!");
      }
    })
    .catch((e) => console.log(e));
}

module.exports = {
  getAllJournals,
  getJournalById,
  addJournal,
  updateJournal,
  deleteJournal,
};
