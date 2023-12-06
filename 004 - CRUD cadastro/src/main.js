import express from "express"
import UserController from "./app/controllers/UserController.js"
import path from "path"
import { fileURLToPath } from 'url';
import cors from 'cors'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(express.static('client'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/user", UserController.index)
app.get("/user/:id", UserController.show)

app.post("/user", UserController.store)

app.put("/user/:id", UserController.update)

app.delete("/user/:id", UserController.delete)

export default app 