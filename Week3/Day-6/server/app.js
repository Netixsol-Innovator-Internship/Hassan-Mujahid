const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = reqiure("path");

const app = express();
app.use(bodyParser.json());

const pathToTasks = path(__dirname, "tasks.json");

const readTasksFromFile = () => {
  try {
    const tasks = fs.readFileSync(pathToTasks, "utf-8");
    return JSON.parse(tasks) || [];
  } catch (err) {
    console.error("Error Reading Tasks file:", err);
    return [];
  }
};

const writeTasksToFile = (tasks) => {
  try {
    fs.writeFileSync(pathToTasks, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.log("Error writing tasks file:", err);
  }
};

app.get("/todos", (req, res) => {
  const tasks = readTasksFromFile();
  res.json(tasks);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTask = { id: Date.now(), complete: false };

  const tasks = readTasksFromFile();
  tasks.push(newTask);
  writeTasksToFile(newTask);

  res.json(newTask);
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  let tasks = readTasksFromFile();
  tasks = tasks.map((task) =>
    task.id === parseInt(id) ? { ...tasks, completed } : task
  );

  writeTasksToFile(tasks);

  res.json({ success: true });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  let tasks = readTasksFromFile();
  tasks = tasks.filter((task) => task.id !== parseInt(id));

  writeTasksToFile(tasks);

  res.json({ success: true });
});

app.listen(5000, () => {
  if (!fs.existsSync(pathToTasks)) {
    fs.writeFileSync(pathToTasks, JSON.stringify([]));
  }

  console.log("Backend is running at port 5000");
});
