const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("hiii");
});

app.listen(3009, () => {
  console.log("listning on port");
});
