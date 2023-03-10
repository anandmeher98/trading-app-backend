const express = require("express");
const app = express();

// journal controller
const journalController = require("../controllers/journal.controller");

// used for sending json request,
app.use(express.json());

const router = express.Router();

router.route("/all").get(journalController.getAllJournals);
router.route("/add").post(journalController.addJournal);

module.exports = router;
