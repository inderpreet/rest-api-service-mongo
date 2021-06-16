const routes = require('express').Router();
const StatusDb = require("../../services/StatusService");

// Route to Get status data - GET REQUEST
routes.get("/", StatusDb.getAllRecords);
// Route to Save status - POST REQUEST
routes.post("/", StatusDb.updateStatusString);

module.exports = routes;
