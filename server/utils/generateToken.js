import jwt from "jsonwebtoken";
export const generateToken = (p) =>
  jwt.sign(p, process.env.JWT_SECRET, { expiresIn: "1d" });
