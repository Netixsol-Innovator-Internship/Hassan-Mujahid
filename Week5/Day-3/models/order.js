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
  user: {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Buyer",
    },
    name: {
      type: String,
      requied: true,
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);
