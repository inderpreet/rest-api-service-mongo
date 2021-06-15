const express = require("express");
const AssetStatus = require("./models/AssetStatus");
const router = express.Router();

// Route to Get status data - GET REQUEST
router.get("/asset-status", async (req, res) => {
  const status = await AssetStatus.find();
  res.send(status);
});

// Route to Save status - POST REQUEST
router.post("/asset-status", async (req, res) => {
  const dockTitle = req.body.title;
  const mess = req.body.mess;
  const ctrlid = req.body.ctrlid;
  var ret = "";

  if ((dockTitle == null && ctrlid == null) | (mess == null)) {
    ret = "Insufficient information. Please check request body.";
    // res.send(ret);
    // return;
  } else if (dockTitle != null) {
    // Check for existing records with same title.
    const searchResults = await AssetStatus.find({
      DockTitle: dockTitle,
    });
    if (searchResults.length == 0 && ctrlid == null) {
      // if no record found and no ctrlid supplied.
      ret =
        "Message Rejected: " +
        dockTitle +
        " not found and CtrlID specified in request body.";
    } else if (searchResults.length == 0 && ctrlid != null) {
      // no record found but ctrl id is available
      // ... create a new
      const newRecord = new AssetStatus({
        DockTitle: dockTitle,
        ControlId: ctrlid,
        LastMess: mess,
        MessTime: Date.now(),
      });
      newRecord.save();
      ret = "Message Saved: " + dockTitle + " added with CtrlId: " + ctrlid;
    } else if (searchResults.length != 0) {
      // record found. Update using title.
      const updateRecord = await AssetStatus.findOneAndUpdate(
        {
          DockTitle: dockTitle,
        },
        {
          LastMess: mess,
          MessTime: Date.now(),
        }
      );
      updateRecord.save();
      ret = "Status Updated!: " + dockTitle;
    }
  }
  res.send(ret);
});

module.exports = router;
