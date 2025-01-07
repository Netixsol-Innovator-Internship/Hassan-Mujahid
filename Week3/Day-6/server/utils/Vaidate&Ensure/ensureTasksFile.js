const fs = require("fs");
const validateTasksData = require("./validateTasksData.js");

const tasksFilePath = require("../rootPath/rootpath.js");

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

module.exports = ensureTasksFile;
