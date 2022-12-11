"use strict";
// for file structure examples:
// https://stackoverflow.com/questions/18927298/node-js-project-naming-conventions-for-files-folders/20885809#20885809

// TODO firebase instead of full database?
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

const testCSVData = [
  {
    consignee_id: "3102549",
    consignee_name: "KeHE - Stockton (33)",
    consignee_shipfrom: "SF",
  },
  {
    consignee_id: "1841102",
    consignee_name: "Kroger",
    consignee_shipfrom: "DUR",
  },
  {
    consignee_id: "3413359",
    consignee_name: "UNFI - Iowa City",
    consignee_shipfrom: "DUR",
  },
  {
    consignee_id: "3413354",
    consignee_name: "UNFI - Moreno Valley",
    consignee_shipfrom: "SF",
  },
];

app.get("/consignees", (req, res) => {
  res.send(testCSVData);
});

function filterConsigneesByShipfrom(arr, location) {
  return arr.filter(
    (cnsgnee) => cnsgnee.consignee_shipfrom.toUpperCase() === String(location)
  );
}

app.get("/consignees/:shipfrom", (req, res) => {
  // where do I get the 'location' parameter from?
  const shipfrom = req.params.shipfrom;
  const response = filterConsigneesByShipfrom(testCSVData, shipfrom);
  res.json(response);
});
