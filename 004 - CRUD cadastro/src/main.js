import express from "express"
import routes from "./routes.js"
import path from "path"
import { fileURLToPath } from 'url';
import cors from 'cors'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.use(express.static('client'))

export default app