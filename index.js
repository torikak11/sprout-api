require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const plants = require("./routes/plants");
const goals = require("./routes/goals");
const habits = require("./routes/habits");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
  res.send("<h2>Sprout API</h2>");
});

app.use("/plants", plants);
app.use("/goals", goals);
app.use("/habits", habits);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(PORT, console.log(`App is listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
