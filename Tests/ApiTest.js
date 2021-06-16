const axios = require("axios").default;

async function getAssetStatus(){
  await axios.get("http://localhost:5000/api/asset-status")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

async function getAssetStatus(){
  await axios.get("http://localhost:5000/api/dock-traffic")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}


getAssetStatus();
getDockTraffic();
