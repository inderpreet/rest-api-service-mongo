const express = require("express");
const authentication = express.Router();

// Route to Get status data - GET REQUEST
authentication.get("/", (req, res) => {
    console.log("/auth triggered");
    res.send({Token: "Token123"});
});

// TODO add authentication token service

// // Route to Get status data - GET REQUEST
// test.get("/test", (req, res) => {
//     console.log("/api/test triggered");
//     res.send({Hello: "Tester"});
// });

module.exports = authentication;