const express = require("express");
const AssetStatus = require("./api/v1/models/AssetStatus");
const router = express.Router();
const StatusDb = require("./api/v1/services/StatusService.js");
const test = require("./api/v1/routes/Status");

// Route to Get status data - GET REQUEST
router.get("/asset-status", StatusDb.getAllRecords);
// Route to Save status - POST REQUEST
router.post("/asset-status", StatusDb.updateStatusString);

router.get("/test", test)

module.exports = router;
