const fs = require("fs");
const validateTasksData = require("../Vaidate&Ensure/validateTasksData.js");

const tasksFilePath = require("../rootPath/rootpath.js");

const readTasksFromFile = () => {
  try {
    const data = fs.readFileSync(tasksFilePath, "utf8");
    const parsedData = JSON.parse(data);

    // Validate the parsed data
    console.log(validateTasksData);
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

module.exports = readTasksFromFile;
