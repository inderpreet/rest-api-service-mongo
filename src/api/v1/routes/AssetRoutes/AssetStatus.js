const routes = require('express').Router();
const StatusDb = require("../../services/StatusService");
const DockTraffic = require("../../services/DockTrafficService");
const getDockStatus = require("../../services/DockStatusService");

// Route to Get status data - GET REQUEST
routes.get("/", StatusDb.getAllRecords);
// Route to Save status - POST REQUEST
routes.post("/", StatusDb.updateStatusString);

routes.get("/dock-traffic", DockTraffic);
routes.get("/dock-status", getDockStatus);

module.exports = routes;
