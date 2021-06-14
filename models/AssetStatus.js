const mongoose = require("mongoose");

// Document Schema for how data is stored in MongoDB
const schema = mongoose.Schema({
        DockList:[]
})

// Arguments to model - modelnamestring schemaName, collectionName
module.exports = mongoose.model("status", schema, "AssetStatus");
