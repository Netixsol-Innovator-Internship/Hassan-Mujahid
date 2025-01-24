const express = require("express");
const router = express.Router();
const {
  getTransaction,
  addTransaction,
  removeTransaction,
} = require("../Controllers/transaction");

router.get("/", getTransaction);
router.post("/add", addTransaction);
router.route("/delete/:id").delete(removeTransaction);

module.exports = router;
