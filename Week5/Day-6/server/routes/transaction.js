const express = require("express");
const router = express.Router();
const {
  getTransaction,
  addTransaction,
  removeTransaction,
} = require("../Controllers/transaction");

router.route("/").get(getTransaction).post(addTransaction);

router.route("/:id").delete(removeTransaction);

module.exports = router;
