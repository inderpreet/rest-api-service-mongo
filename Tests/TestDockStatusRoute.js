const axios = require("axios").default;

async function getDockStatus() {
  await axios
    .get("http://localhost:5000/api/asset-status/dock-status")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getDockStatus();
