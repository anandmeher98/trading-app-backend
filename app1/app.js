const express = require("express");
const app = express();

// use for sending json request in body
// create project for example
app.use(express.json());
const indexRouter = require("./routes/index");

app.get("/", (req, res) => {
  return res.send("DMT-Data Management Tool");
});

app.use("/api", indexRouter);

const port = process.env.PORT || 3300;
console.log(port);
app.listen(port, () => console.log(`DMT is listening on port ${port}....`));
