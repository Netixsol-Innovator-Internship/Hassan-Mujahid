const Transaction = require("../models/Transaction");

exports.getTransaction = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
    console.log(err);
  }
};

exports.addTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.removeTransaction = async (req, res, next) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({
        success: true,
        error: "No transaction found!",
      });
    }

    await Transaction.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
    console.log(err);
  }
};
