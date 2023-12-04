import express from "express"
import UserController from "./app/controllers/UserController.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/user", UserController.index)
app.get("/user/:id", UserController.show)

app.post("/user", UserController.store)

app.put("/user/:id", UserController.update)

app.delete("/user/:id", UserController.delete)

export default app 