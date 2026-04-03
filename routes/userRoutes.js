import express from "express";
import User from "../models/User.js";
import { auth, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, authorize("admin"), async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.patch("/:id", auth, authorize("admin"), async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

export default router;