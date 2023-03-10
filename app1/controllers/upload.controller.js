function uploadFile(req, res) {
  console.log("file upload");
  //   console.log(req.body, req.files);
  console.log(req.body);
  res.send("upload file");
}

module.exports = {
  uploadFile,
};
