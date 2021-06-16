const express = require("express");
const router = express.Router();

// Route to Get status data - GET REQUEST
router.get("/test", (req, res)=>{
console.log("TEst");
res.send({"Hello":"World"});
});

module.exports = router;
