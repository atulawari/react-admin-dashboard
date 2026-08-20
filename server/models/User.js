import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, default: "" },
    role: { type: String, enum: ["User", "Manager", "Admin"], default: "User" },
  },
  { timestamps: true },
);
export default mongoose.model("User", schema);
