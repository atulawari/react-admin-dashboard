export function validateUser(req, res, next) {
  if (!req.body.name?.trim() || !req.body.email?.trim())
    return res.status(400).json({ message: "Name and email are required" });
  next();
}
