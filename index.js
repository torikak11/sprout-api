require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const bodyParser = require("body-parser");

const plants = require("./routes/plants");
const goals = require("./routes/goals");
const habits = require("./routes/habits");
const auth = require("./routes/auth");

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

// middleware
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
  res.send("<h2>Sprout API</h2>");
});

app.use("/plants", plants);
app.use("/goals", goals);
app.use("/habits", habits);
app.use("/auth", auth);

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
