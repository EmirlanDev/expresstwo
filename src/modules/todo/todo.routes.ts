import { Router } from "express";
import todoControllers from "./todo.controllers";

const router = Router();

router.get("/get-all", todoControllers.getAllData);
router.post("/create", todoControllers.createData);
// router.patch("/update/:id", todoControllers.updateData);
router.delete("/delete/:id", todoControllers.deleteData);

export default router;
