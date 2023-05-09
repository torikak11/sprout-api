require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const mongoose = require("mongoose");

const PORT = 3000;

//middleware
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
  res.send("<h2>Sprout Server</h2>");
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
