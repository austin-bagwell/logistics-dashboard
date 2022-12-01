"use strict";
// for file structure examples:
// https://stackoverflow.com/questions/18927298/node-js-project-naming-conventions-for-files-folders/20885809#20885809

// TODO firebase instead of full database?
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static(path.join(__dirname, "public")));

// FIXME how to connect backend with parcel?
app.get("/test", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
