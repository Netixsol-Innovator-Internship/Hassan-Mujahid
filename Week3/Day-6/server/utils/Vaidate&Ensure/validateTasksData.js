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

module.exports = validateTasksData;
