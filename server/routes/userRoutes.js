import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validateUser } from "../middleware/validationMiddleware.js";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const r = Router();
r.use(protect);
r.get("/", getUsers);
r.get("/:id", getUser);
r.post("/", validateUser, createUser);
r.put("/:id", validateUser, updateUser);
r.delete("/:id", deleteUser);
export default r;
