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

const testShipmenData = [
  {
    consignee: {
      id: "3413359",
      name: "UNFI - Iowa City",
    },
    details: {
      proNumber: "1234",
      carrier: "ODFL",
      shipfrom: "DUR",
      shipDate: "1/1/23",
      arrivedAtCarrierYard: "1/2/23",
      deliveryApptDate: "1/3/23",
      deliveryDate: "1/3/23",
      delivered: true,
    },
  },
  {
    consignee: {
      id: "3413354",
      name: "UNFI - Moreno Valley",
    },
    details: {
      proNumber: "9876",
      carrier: "XPO",
      shipFrom: "SF",
      shipDate: "1/10/23",
      arrivedAtCarrierYard: "1/12/23",
      deliveryApptDate: "1/20/23",
      deliveryDate: "",
      delivered: false,
    },
  },
];

app.get("/consignees", (req, res) => {
  res.send(testConsigneeData);
});

function filterConsigneesByShipfrom(arr, location) {
  return arr.filter(
    (cnsgnee) =>
      cnsgnee.default_shipfrom_location.toUpperCase() === String(location)
  );
}

app.get("/consignees/:shipfrom", (req, res) => {
  // where do I get the 'location' parameter from?
  const shipfrom = req.params.shipfrom;
  const response = filterConsigneesByShipfrom(testConsigneeData, shipfrom);
  res.json(response);
});
