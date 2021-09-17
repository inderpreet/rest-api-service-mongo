const DatabaseConnection = require("../src/api/v1/Helpers/DatabaseConnection");

const DummyData = require("./DummyControlMessage");

const main = async () => {
  var db = new DatabaseConnection();
  // db.updateDocumentByCtrlId(DummyData);
  // db.findDocument().then((v) => console.log(v[1].data));
  db.findDocumentByCtrlIdAndMonth("12343424", 9).then((v) => console.log(v));

  const checkAndExitProgram = setInterval(() => {
    if (db.getIsDone() == 1) {
      db.closeDatabaseConnection();
      console.log("Closing DB Connection");
      process.exit(0);
    }
  }, 100);
};

main();
