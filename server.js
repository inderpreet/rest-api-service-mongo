if(process.env.DB_URL == null){
  require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(process.env.PORT, () => {
      console.log("Server Started");
    });
  });
