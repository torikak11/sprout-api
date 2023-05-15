require("dotenv").config();
const connectDB = require("./db/connect");
const Plant = require("./models/Plant");

const jsonPlants = require("./plants.json");

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    await Plant.deleteMany();
    await Plant.create(jsonPlants);
    console.log("success");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
