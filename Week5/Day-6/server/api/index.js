require("dotenv").config();
const express = require("express");
const colors = require("colors");
const connectDb = require("../config/db");
const routes = require("../routes/transaction");
const cors = require("cors");

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});

module.exports = app;
