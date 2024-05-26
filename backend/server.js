require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const professorsRoutes = require("./routes/professors");
const { error, log } = require("console");

// express app
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/professors", professorsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connecte to db", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
