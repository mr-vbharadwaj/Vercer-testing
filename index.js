// Import packages
const express = require("express");
const mongoose = require("mongoose");
const home = require("./routes/home");
require("dotenv").config();

const db = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Db Connected");
    } catch (error) {
      console.log("DB Connection Error");
      console.error(error);
    }
  };

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);

// connection
const port = process.env.PORT;
db();
app.listen(port, () => console.log(`Listening to port ${port}`));
