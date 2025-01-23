const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  items: [
    {
      product: {
        type: Object,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Completed", "Canceled"],
  },
  user: {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Buyer",
    },
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
