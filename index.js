require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const mongoose = require("mongoose");
const plants = require("./routes/plants");

const PORT = 3000;

//middleware
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
  res.send("<h2>Sprout Server</h2>");
});

app.use('/plants', plants);

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(PORT, console.log(`App is listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
