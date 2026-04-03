import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "analyst", "viewer"],
    default: "viewer"
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("User", userSchema);