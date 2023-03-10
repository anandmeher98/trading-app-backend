const express = require("express");
const router = express.Router();

const journalRouter = require("./journal.js");

router.use("/journal/v1", journalRouter);

module.exports = router;
