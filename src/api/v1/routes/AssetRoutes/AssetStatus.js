const routes = require('express').Router();
const StatusDb = require("../../services/StatusService");
const DockTraffic = require("../../services/DockTrafficService");

// Route to Get status data - GET REQUEST
routes.get("/", StatusDb.getAllRecords);
// Route to Save status - POST REQUEST
routes.post("/", StatusDb.updateStatusString);

routes.get("/dock-traffic", DockTraffic);

module.exports = routes;
