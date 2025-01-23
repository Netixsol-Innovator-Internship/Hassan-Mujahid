const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  storeId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  Image: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Image",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
