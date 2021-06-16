const routes = require('express').Router();
const test = require("./Test");
const assetStatusRoutes = require("./AssetRoutes/AssetStatus");

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use("/test", test);
routes.use("/asset-status", assetStatusRoutes);

module.exports = routes;
