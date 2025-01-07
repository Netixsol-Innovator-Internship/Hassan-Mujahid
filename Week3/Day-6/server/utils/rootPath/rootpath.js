const path = require("path");

const rootPath = process.cwd();

const tasksFilePath = path.join(rootPath, "tasks.json");

module.exports = tasksFilePath;
