"use strict";
const headersForShipmentsPage = [
  "consignee",
  "proNumber",
  "purchaseOrder",
  "carrier",
  "shipFrom",
  "shipDate",
  "deliveryDate",
];

function createConstructor(...propNames) {
  return class {
    constructor(...propValues) {
      propNames.forEach((name, idx) => {
        this[name] = propValues[idx];
      });
    }
  };
}

const Shipment = createConstructor(...headersForShipmentsPage);

function makeTestShipmentData() {
  const consignees = [
    "UNFI - Lancaster",
    "Cavallaro",
    "Kroger",
    "UNFI - Moreno Valley",
    "Bob's Market",
    "King's Red & White",
  ];
  const proNumber = Math.round(Math.random() * 100000).toString();
  const purchaseOrder = `PO${Math.round(Math.random() * 1000).toString()}`;
  const carriers = ["ODFL", "ESTES", "XPO", "NRCL", "WRDL"];
  const shipFroms = ["DURHAM", "EMERYVILLE", "DALLAS"];
  const shipDates = ["1/1/23", "1/2/23", "1/3/23"];
  const deliveryDates = ["1/6/23", "1/7/23", "1/8/23"];

  const randomIndex = (arr) => {
    if (arr.length > 1) {
      return arr[Math.floor(Math.random() * arr.length)];
    } else return arr[0];
  };

  const shipment = [
    randomIndex(consignees),
    proNumber,
    purchaseOrder,
    randomIndex(carriers),
    randomIndex(shipFroms),
    randomIndex(shipDates),
    randomIndex(deliveryDates),
  ];
  return shipment;
}

module.exports = function makeTestShipments(int) {
  const shipments = [];
  for (let i = 0; i < int; i++) {
    const testData = makeTestShipmentData();
    shipments.push(new Shipment(...testData));
  }
  return shipments;
};
