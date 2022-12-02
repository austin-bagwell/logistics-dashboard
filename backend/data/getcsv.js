"use strict";
const fs = require("fs");

function readFile(path) {
  const file = `./assets/csv/${path}.csv`;
  try {
    const data = fs.readFileSync(file, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

function csvToArray(csv) {
  let rows = csv.split("\r\n");
  return rows.map((row) => {
    return row.split(",");
  });
}
