const express = require("express");
const test = express.Router();

// Route to Get status data - GET REQUEST
test.get("/", (req, res) => {
  console.log("TEst");
  res.send({ Hello: "World" });
});

// Route to Get status data - GET REQUEST
test.get("/test", (req, res) => {
  console.log("TEst");
  res.send({ Hello: "Tester" });
});



module.exports = test;
