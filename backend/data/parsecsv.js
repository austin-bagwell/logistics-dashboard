"use strict";
const { parse } = require("csv-parse");
const fs = require("fs");

// FROM code with Kavit tutorial
const parser = parse({ columns: true }, function (err, records) {
  console.log(records);
  // return new Promise((resolve) => resolve(records).then(console.log));
});

fs.createReadStream(__dirname + "/assets/test_consignees.csv").pipe(parser);

/*
async function readFile(filename) {
  const file = `./assets/csv/${filename}.csv`;
  try {
    const data = await fs.readFile(file, "utf-8");
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
*/

/* EXAMPLE CSV PARSE NONENSE BELOW
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

function parseCSV(filename) {
  const csv2DArr = csvToArray(readFile(filename));
  return csv2DArr;
}

const nsData = parseCSV("netsuiteData");
console.log(nsData[0][0]);
*/
