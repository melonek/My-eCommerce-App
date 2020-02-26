const express = require("express");
//app
const app = express();
require("dotenv").config();
//import mongoose
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// load env variables
require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");

const port = process.env.PORT || 8000;

//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB Connected"));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`🌏Server is running on port ${port}🌐`);
});
