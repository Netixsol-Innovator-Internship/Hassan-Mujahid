if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const routes = require("./routes/transaction");
const cors = require("cors");

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/transaction", routes);

module.exports = app;
