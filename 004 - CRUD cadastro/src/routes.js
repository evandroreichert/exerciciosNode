import { Router } from "express";
import AutorController from "./app/controllers/UserController.js"
import path from "path"
import { fileURLToPath } from 'url';

const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static('client'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

router.get("/autor", AutorController.index)
router.get("/autor/:id", AutorController.show)

router.post("/autor", AutorController.store)

router.put("/autor/:id", AutorController.update)

router.delete("/autor/:id", AutorController.delete)

export default router