const express = require("express");
//app
const app = express();
require("dotenv").config();
//import mongoose
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT || 8000;

// load env variables
const dotenv = require("dotenv");
dotenv.config();

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.listen(port, () => {
  console.log(`🌏Server is running on port ${port}🌐`);
});
