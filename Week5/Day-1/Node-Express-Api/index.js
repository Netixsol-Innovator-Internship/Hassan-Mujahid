import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

let users = {};

app.get("/", (req, res) => {
  res.send(users);
});
