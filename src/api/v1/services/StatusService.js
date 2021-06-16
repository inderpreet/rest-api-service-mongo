const AssetStatus = require("../models/AssetStatus");

module.exports = {
        addNewRecord,
        updateRecord,
        getAllRecords,
        updateStatusString,
}

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
  return "New record Added: " + doc.dockTitle + " and " + doc.ctrlid;
}

async function updateRecord(doc) {
  if (doc.ctrlid != null) {
    var results;
    // fetch record from DB
    await AssetStatus.findOne({ ControlId: doc.ctrlid }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        results = docs;
      }
    });

    const upRecord = await AssetStatus.findOneAndUpdate(
      {
        ControlId: doc.ctrlid,
      },
      {
        DockTitle: doc.dockTitle == null ? results.DockTitle : doc.dockTitle,
        LastMess: doc.mess,
        MessTime: Date.now(),
      }
    );
    upRecord.save();
    return "Status Updated!: " + doc.ctrlid;
  } else {
    return "Bad Arguments!";
  }
}

async function getAllRecords(req, res) {
  const status = await AssetStatus.find();
  res.send(status);
}

async function updateStatusString(req, res) {
  const dockTitle = req.body.title;
  const mess = req.body.mess;
  const ctrlid = req.body.ctrlid;
  var ret = "";

  if (ctrlid == null | (mess == null)) {
    ret = "Insufficient information. Please check request body.";
  } else {
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
  } 

  res.send(ret);
}
