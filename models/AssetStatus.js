const mongoose = require("mongoose");

const schema = mongoose.Schema({
        DockList:[]
})

module.exports = mongoose.model("status", schema, "AssetStatus");
