const express = require("express");
const app = express();

//multipart/form data, multer
const multer = require("multer");
const upload = multer();

// upload controller
const uploadFileController = require("../controllers/upload.controller");

// used for sending json request,
app.use(express.json());

const router = express.Router();

router.route("/uploadFile").post(upload.any(), uploadFileController.uploadFile);

module.exports = router;
