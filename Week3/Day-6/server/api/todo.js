const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const tasksFilePath = path.join(__dirname, "tasks.json");

const validateTasksData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }
  for (const item of data) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      throw new Error("Each item in the array must be an object");
    }
  }
};

const readTasksFromFile = () => {
  try {
    const data = fs.readFileSync(tasksFilePath, "utf8");
    const parsedData = JSON.parse(data);

    // Validate the parsed data
    validateTasksData(parsedData);

    return parsedData;
  } catch (err) {
    console.error(
      "Error reading tasks file, returning empty array:",
      err.message
    );
    return [];
  }
};

const writeTasksToFile = (tasks) => {
  try {
    validateTasksData(tasks);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing to tasks file:", err.message);
    fs.writeFileSync(tasksFilePath, JSON.stringify([])); // Reset to empty array
  }
};

const ensureTasksFile = () => {
  if (!fs.existsSync(tasksFilePath)) {
    // Create file with an empty array if it doesn't exist
    fs.writeFileSync(tasksFilePath, JSON.stringify([]));
  } else {
    // Validate the file contents
    try {
      const data = fs.readFileSync(tasksFilePath, "utf8");
      const parsedData = JSON.parse(data);

      // Ensure the data is a valid array
      validateTasksData(parsedData);
    } catch (err) {
      console.error(
        "Invalid tasks file, resetting to empty array:",
        err.message
      );
      fs.writeFileSync(tasksFilePath, JSON.stringify([]));
    }
  }
};

app.get("/todos", (req, res) => {
  const tasks = readTasksFromFile();
  console.log("tasks", tasks);
  res.json(tasks);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTask = { id: Date.now(), text, complete: false };

  const tasks = readTasksFromFile();
  tasks.push(newTask);
  console.log("tasks", tasks);

  writeTasksToFile(tasks);
  console.log("newTask", newTask);

  res.json(newTask);
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  let tasks = readTasksFromFile();
  tasks = tasks.map((task) =>
    task.id === parseInt(id) ? { ...task, completed } : task
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
  ensureTasksFile();

  console.log("Backend is running at port 5000");
});
