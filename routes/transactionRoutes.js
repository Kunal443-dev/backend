import express from "express";
import Transaction from "../models/Transaction.js";
import { auth, authorize } from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, authorize("admin"), async (req, res) => {
  const t = await Transaction.create({
    ...req.body,
    user: req.user.id
  });
  res.json(t);
});

router.get("/", auth, async (req, res) => {
  const { type, category } = req.query;

  let filter = { user: req.user.id }; 

  if (type) filter.type = type;
  if (category) filter.category = category;

  const data = await Transaction.find(filter);
  res.json(data);
});

router.put("/:id", auth, authorize("admin"), async (req, res) => {
  const t = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(t);
});

router.delete("/:id", auth, authorize("admin"), async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;