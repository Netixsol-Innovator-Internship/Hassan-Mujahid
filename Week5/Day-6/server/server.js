if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const routes = require("./routes/transaction");

connectDb();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/transaction", routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
