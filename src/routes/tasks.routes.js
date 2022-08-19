import { Router } from "express";
const router = Router();
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/tasks.controller.js";

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
