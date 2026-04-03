import express from "express";
import Transaction from "../models/Transaction.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/summary", auth, async (req, res) => {
  const income = await Transaction.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Transaction.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json({
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    netBalance: (income[0]?.total || 0) - (expense[0]?.total || 0)
  });
});

router.get("/category", auth, async (req, res) => {
  const data = await Transaction.aggregate([
    { $group: { _id: "$category", total: { $sum: "$amount" } } }
  ]);
  res.json(data);
});

export default router;