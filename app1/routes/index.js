// routing
const express = require("express");
const router = express.Router();

const projectRouter = require("./project.js");
const tableRouter = require("./table.js");
const uploadFileRouter = require("./uploadFile.js");

router.use("/project/v1", projectRouter);
router.use("/tableInfo/v1", tableRouter);
router.use("/upload/v1", uploadFileRouter);

module.exports = router;
