const express = require("express")
const AssetStatus = require("./models/AssetStatus");
const router = express.Router()

// Get status
router.get("/asset-status", async (req, res) => {
	// const posts = await Post.find()
        const status = await AssetStatus.find();
	res.send(status);
})

// Save status
router.post("/asset-status", async (req, res)=>{
        const testStatus = new AssetStatus({
                // TODO validate here
                DockList: [
                        {
                                DockTitle: req.body.title,
                                Desc: "Descrpiton",
                                LastMess: "Last Message 1",
                                MessTime: Date.now()
                        }
                ]
        })
        // TODO check for exisiting records here
        testStatus.save();
        res.send("Status Updated!" + req.body.title);
})

module.exports = router
