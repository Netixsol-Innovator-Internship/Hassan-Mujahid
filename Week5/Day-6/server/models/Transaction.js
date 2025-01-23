const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = Schema({
  text: {
    type: String,
    required: [true, "Please add a text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
