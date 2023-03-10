const express = require("express");
const app = express();

// table controller
const tableMetadataController = require("../controllers/tableMetadata.controller");

// used for sending json request,
app.use(express.json());

const router = express.Router();

router.route("/save").post(tableMetadataController.saveTableInfo);

module.exports = router;
