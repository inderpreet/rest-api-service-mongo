const axios = require("axios").default;

axios.get("http://localhost:5000/api/asset-status").then((res) => {
  console.log(res.data);
});
