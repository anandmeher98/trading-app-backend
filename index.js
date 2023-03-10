const express = require("express");
const app = express();
var cors = require("cors");
// use for sending json request in body
// create project for example
app.use(express.json());
app.use(cors());
const indexRouter = require("./src/routes/indexrouter");

app.get("/", (req, res) => {
  return res.send("Trading App");
});
app.use("/api", indexRouter);

const port = process.env.PORT || 5500;
console.log(port);
app.listen(port, () =>
  console.log(`TradingApp is listening on port ${port}....`)
);
