import dotenv from "dotenv";
import path from "path";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { seedAdmin } from "./controllers/authController.js";
// Force dotenv to load the file explicitly from the server directory
// dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/api/health", (q, s) => s.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
connectDB()
  .then(async () => {
    await seedAdmin();
    app.listen(process.env.PORT || 5000, () =>
      console.log("API running on port 5000"),
    );
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
