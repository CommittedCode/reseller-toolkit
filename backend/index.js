require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    app.get("/", (req, res) => {
      res.send("Hello");
    });
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error);
  });
