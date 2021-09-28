const mongoose = require("mongoose");

// Document Schema for how data is stored in MongoDB
const schema = mongoose.Schema({
    ControlId: {
        type: String,
        required: true
    },
    DockTitle: String,
    Desc: String,
    DockFaceDirection: {
      type: String,
      enum: ["North", "South", "East", "West"],
      default: "South",
    },
    LastMess: String,
    MessTime: Number,
    CurrentState: {
        type: String,
        enum: ["Used", "Unused", "Offline"],
        default: "Offline",
    },
    CycleState: {
        type: String,
        enum: [
            "Ready",
            "Vehicle-Detected",
            "Vehicle-Engaging",
            "Vehicle-Bypassed",
            "Vehicle-Engaged",
            "Seal-Inflating",
            "Seal-Bypass",
            "Seal-Inflated",
            "Door-Opening",
            "Door-Stopped",
            "Leveller-Raising",
            "Leveller-Bypassed",
            "Leveller-Lowering",
            "Leveller-Deployed",
            "Loading-Unloading",
            "Loading-Unloading-Complete",
            "Leveller-Stored",
            "Door-Closing",
            "Seal-Deflating",
            "Vehicle-Disengaging",
        ],
        default: "Ready",
    },
    VehicleDetected: Boolean,
    RestraintState: {
        type: String,
        enum: [
            "Engaged",
            "Disengaged",
            "Bypassed",
            "Not-Installed",
            "Fault",
            "Not-Detected",
        ],
        default: "Not-Installed",
    },
    SealState: {
        type: String,
        enum: ["Inflated", "Deflated", "Not-Installed", "Fault", "Not-Detected"],
        default: "Not-Installed",
    },
    DoorState: {
        type: String,
        enum: [
            "Open",
            "Closed",
            "Midway-stopped",
            "Opening",
            "Closing",
            "Not-Installed",
            "Fault",
            "Not-Detected",
        ],
        default: "Not-Installed",
    },
    LevellerState: {
        type: String,
        enum: [
            "Stored",
            "Deployed",
            "Midway-stopped",
            "Raising",
            "Lowering",
            "Not-Installed",
            "Fault",
            "Not-Detected",
        ],
        default: "Not-Installed",
    },
    CycleData:[{EventId: Number, EventString: String, EventTime: String}]
});

// Arguments to model - modelnamestring schemaName, collectionName
module.exports = mongoose.model("status", schema, "AssetStatus");
