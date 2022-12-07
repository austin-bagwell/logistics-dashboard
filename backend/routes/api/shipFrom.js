"use strict";
const router = require("express").Router();

// use this to a list of available ship-from locations
router.get("/ship-from", (req, res) => {});

// use this with the consignees dropdown selection to get a list of all consignees available for a given ship location
router.get("/ship-from/:name", (req, res) => {});

module.exports = router;
