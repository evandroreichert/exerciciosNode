import { Router } from "express";
import UserController from "./app/controllers/UserController.js"
import path from "path"
import { fileURLToPath } from 'url';

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get("/user", UserController.index)
router.get("/user/:id", UserController.show)

router.post("/user", UserController.store)

router.put("/user/:id", UserController.update)

router.delete("/user/:id", UserController.delete)

export default router