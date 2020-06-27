const express = require("express");
const cors = require("cors");
const customerRouter = require("./customers");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", customerRouter);

module.exports = app;