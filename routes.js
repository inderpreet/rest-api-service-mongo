const express = require("express");
const AssetStatus = require("./models/AssetStatus");
const router = express.Router();

// Get status
router.get("/asset-status", async (req, res) => {
  const status = await AssetStatus.find();
  res.send(status);
});

// Save status
router.post("/asset-status", async (req, res) => {
  if (req.body.title == null || req.body.mess == null) {
    res.send("Title or Message missing. Check request Body");
  } else {
    const dockTitle = req.body.title;
    const mess = req.body.mess;
    const ctrlid = req.body.ctrlid;
    const docs = await AssetStatus.find({
      DockTitle: dockTitle,
    });

    if (docs.length == 0) {
      if (ctrlid == null) {
        res.send(dockTitle + " and CtrlID not found. No records added");
        return;
      } else {
        const ret = new AssetStatus({
          DockTitle: dockTitle,
          ControlId: ctrlid,
          LastMess: mess,
          MessTime: Date.now(),
        });
        ret.save();
      }
      res.send(dockTitle + " not found. Adding new dock");
    } else {
      const testStatus = new AssetStatus({
        DockTitle: dockTitle,
        LastMess: mess,
        MessTime: Date.now(),
      });
      // TODO check for exiiting records here
      const doc = await AssetStatus.findOneAndUpdate(
        {
          DockTitle: dockTitle,
        },
        {
          LastMess: mess,
          MessTime: Date.now(),
        }
      );
      // testStatus.save();
      res.send("Status Updated!" + req.body.title);
    }
  }
});

module.exports = router;
