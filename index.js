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

// in the distant future data will be sourced from an actual DB
// DATA
const testConsigneeData = [
  {
    consignee_id: "3102549",
    consignee_name: "KeHE - Stockton (33)",
    default_shipfrom_location: "SF",
  },
  {
    consignee_id: "1841102",
    consignee_name: "Kroger",
    default_shipfrom_location: "DUR",
  },
  {
    consignee_id: "3413359",
    consignee_name: "UNFI - Iowa City",
    default_shipfrom_location: "DUR",
  },
  {
    consignee_id: "3413354",
    consignee_name: "UNFI - Moreno Valley",
    default_shipfrom_location: "SF",
  },
];

const testShipmentData = [
  {
    consignee: "UNFI - Iowa City",
    proNumber: "1234",
    purchaseOrder: "P5678",
    carrier: "ODFL",
    shipFrom: "DUR",
    shipDate: "1/1/23",
    deliveryDate: "1/3/23",
  },
  {
    consignee: "UNFI - Moreno Valley",
    proNumber: "9876",
    purchaseOrder: "11223344",
    carrier: "XPO",
    shipFrom: "SF",
    shipDate: "1/10/23",
    deliveryDate: "",
  },
];

// all these need to be moved to module(s) at some point
// FUNCTIONS
function filterConsigneesByShipfrom(arr, location) {
  return arr.filter(
    (cnsgnee) =>
      cnsgnee.default_shipfrom_location.toUpperCase() === String(location)
  );
}

// these move to a router module at some point
// ROUTES

// SHIPMENT ROUTES
app.get("/shipments", (req, res) => {
  res.send(testShipmentData);
});

app.get("/shipmets?howToParseQuerys", (req, res) =>
  res.send("results of query")
);

// I think this route needs to be renamed to make more sense
// CONSIGNEE ROUTES
app.get("/consignees", (req, res) => {
  res.send(testConsigneeData);
});

app.get("/consignees/:shipfrom", (req, res) => {
  // where do I get the 'location' parameter from?
  const shipfrom = req.params.shipfrom;
  const response = filterConsigneesByShipfrom(testConsigneeData, shipfrom);
  res.json(response);
});
