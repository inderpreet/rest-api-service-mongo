const routes = require('express').Router();
const test = require("./Test");
const assetStatusRoutes = require("./AssetRoutes/AssetStatus");
const authentication = require("./Authentication");

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'});
});

routes.use("/test", test);  // Add Test Routes. Use this as a template
routes.use("/asset-status", assetStatusRoutes);

routes.use("/auth", authentication);

module.exports = routes;
