const fs = require("fs");
const validateTasksData = require("../Vaidate&Ensure/validateTasksData");

const tasksFilePath = require("../rootPath/rootpath");

const writeTasksToFile = (tasks) => {
  try {
    validateTasksData(tasks);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing to tasks file:", err.message);
    fs.writeFileSync(tasksFilePath, JSON.stringify([])); // Reset to empty array
  }
};

module.exports = writeTasksToFile;
