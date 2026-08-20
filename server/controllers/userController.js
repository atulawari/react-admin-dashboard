import User from "../models/User.js";
export async function getUsers(req, res) {
  res.json({ users: await User.find().sort({ createdAt: -1 }) });
}
export async function getUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user });
}
export async function createUser(req, res) {
  const { name, email, phone = "", role = "User" } = req.body;
  if (await User.findOne({ email: email.toLowerCase().trim() }))
    return res.status(409).json({ message: "Email already exists" });
  const user = await User.create({ name, email, phone, role });
  res.status(201).json({ user });
}
export async function updateUser(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user });
}
export async function deleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User deleted" });
}
