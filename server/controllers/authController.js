import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
export async function login(req, res) {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email?.toLowerCase().trim() });
  if (!admin || !(await bcrypt.compare(password || "", admin.password)))
    return res.status(401).json({ message: "Invalid email or password" });
  const token = jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.json({ token, user: { id: admin._id, email: admin.email } });
}
export async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase().trim(),
    password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;
  const exists = await Admin.findOne({ email });
  if (!exists)
    await Admin.create({ email, password: await bcrypt.hash(password, 12) });
}
