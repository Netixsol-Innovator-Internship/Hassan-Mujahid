const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  originalName: {
    type: String, // Original file name
    required: true,
  },
  path: {
    type: String, // File path or URL
    required: true,
  },
  ContentType: {
    type: String, // MIME type (e.g., "image/jpeg")
    required: true,
  },
  size: {
    type: Number, // File size in bytes
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imageSchema);
