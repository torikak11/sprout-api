require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const bodyParser = require("body-parser");

const plants = require("./routes/plants");
const goals = require("./routes/goals");
const habits = require("./routes/habits");
const auth = require("./routes/auth");

// middleware
const authenticationHandler = require("./middleware/authentication");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
  res.send("<h2>Sprout API</h2>");
});

app.use("/api/v1/plants", plants);
app.use("/api/v1/goals", authenticationHandler, goals);
app.use("/api/v1/habits", habits);
app.use("/api/v1/auth", auth);

app.use(notFound);
app.use(errorHandler);

// database connection
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(PORT, console.log(`App is listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
