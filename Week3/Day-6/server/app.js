const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ensureTasksFile } = require("./utils/index");

const todoRoutes = require("./routes/todos");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/todos", todoRoutes);

app.listen(5000, () => {
  ensureTasksFile();

  console.log("Backend is running at port 5000");
});
