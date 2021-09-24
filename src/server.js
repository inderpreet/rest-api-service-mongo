if (process.env.DB_URL == null) {
    require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api/v1/routes");
const {log} = require("./api/v1/middleware/Logger");
const cors = require("cors");

try {
    mongoose
        .connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            const app = express();
            app.use(express.json());
            app.use(cors());
            app.use("/api", routes);
            app.get("/", (req, res, next) => {
                res.send("Blue Giant Equipment Corp. Data API v1.0 <br>Please use API keys and Endpoints.");
            })
            app.listen(process.env.PORT, () => {
                console.log(`REST API Server Started at ${process.env.PORT}`);
            });
        });
} catch (e) {
    log(e);
}

