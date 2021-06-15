const express = require("express");
const AssetStatus = require("./models/AssetStatus");
const router = express.Router();

async function addNewRecord(doc) {
  if (doc.ctrlid != null) {
    const newRecord = new AssetStatus({
      DockTitle: doc.dockTitle || "Dock",
      ControlId: doc.ctrlid,
      LastMess: doc.mess,
      MessTime: Date.now(),
    });
    newRecord.save();
  }
  return ( "New record Added: " + doc.dockTitle + " and " + doc.ctrlid );
}

async function updateRecord(doc) {
  if (doc.ctrlid != null) {
    const updateRecord = await AssetStatus.findOneAndUpdate(
      {
        ControlId: doc.ctrlid,
      },
      {
        LastMess: doc.mess,
        MessTime: Date.now(),
      }
    );
    updateRecord.save();
    return "Status Updated!: " + doc.ctrlid;
  } else if (doc.dockTitle != null) {
    const updateRecord = await AssetStatus.findOneAndUpdate(
      {
        DockTitle: doc.dockTitle,
      },
      {
        LastMess: doc.mess,
        MessTime: Date.now(),
      }
    );
    updateRecord.save();
    return "Status Updated!: " + doc.dockTitle;
  } else {
    return "Bad Arguments!";
  }
}

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
  } else if (ctrlid != null) {
    const searchByCtrlId = await AssetStatus.find({
      ControlId: ctrlid,
    });
    if (searchByCtrlId.length == 0) {
      // create new record
      ret = await addNewRecord({
        dockTitle: dockTitle,
        ctrlid: ctrlid,
        mess: mess,
      });
    } else {
      // existing record found- update
      ret = await updateRecord({
        dockTitle:dockTitle,
        ctrlid: ctrlid,
        mess: mess,
      })
    }
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
      ret = await addNewRecord({
        dockTitle: dockTitle,
        ctrlid: ctrlid,
        mess: mess,
      })
    } else if (searchResults.length != 0) {
      // record found. Update using title.
      ret = await updateRecord({
        dockTitle: dockTitle,
        ctrlid: ctrlid,
        mess: mess,
      })
    }
  } else if (ctrlid != null) {
    const searchResults2 = await AssetStatus.find({
      ControlId: ctrlid,
    });
    if (searchResults2.length == 0) {
      ret = "No exisiting Ctrls Found";
    }

    ret = "based on ctrtl id";
  } else {
    ret = "Unimplemented Code Section.";
  }
  res.send(ret);
});

module.exports = router;
