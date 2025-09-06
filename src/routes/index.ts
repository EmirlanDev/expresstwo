import { Router } from "express";
import cors from "cors";
import todoRoutes from "../modules/todo/todo.routes";
import authRoutes from "../modules/auth/auth.routes";

const router = Router();

const corsConfig = {
  origin: ["http://localhost:3000"],
};

router.use("/todo", cors(corsConfig), todoRoutes);
router.use("/auth", cors(corsConfig), authRoutes);

export default router;
