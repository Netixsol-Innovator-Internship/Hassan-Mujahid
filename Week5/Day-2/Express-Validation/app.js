import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";

const app = express();

app.use(bodyParser.json());
const PORT = 8000;

app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
