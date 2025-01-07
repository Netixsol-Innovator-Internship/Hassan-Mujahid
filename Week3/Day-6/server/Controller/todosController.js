const { readTasksFromFile, writeTasksToFile } = require("../utils/index");

const sendTodos = (req, res) => {
  const tasks = readTasksFromFile();
  console.log("tasks", tasks);
  res.json(tasks);
};

const createTodo = (req, res) => {
  const { text } = req.body;
  const newTask = { id: Date.now(), text, complete: false };

  const tasks = readTasksFromFile();
  tasks.push(newTask);
  console.log("tasks", tasks);

  writeTasksToFile(tasks);
  console.log("newTask", newTask);

  res.json(newTask);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  let tasks = readTasksFromFile();
  tasks = tasks.map((task) =>
    task.id === parseInt(id) ? { ...task, completed } : task
  );

  writeTasksToFile(tasks);

  res.json({ success: true });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  let tasks = readTasksFromFile();
  tasks = tasks.filter((task) => task.id !== parseInt(id));

  writeTasksToFile(tasks);

  res.json({ success: true });
};

module.exports = { sendTodos, createTodo, updateTodo, deleteTodo };
