const express = require('express')
const cors = require('cors')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "client")))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/cargainicial', (req, res) => {
    async function lerCandidatos() {
        const readCsv = await fs.readFile('config.csv', 'utf-8')
        const candidatos = readCsv.split(',')

        console.log(candidatos);
        res.send(candidatos)
    }

    lerCandidatos()
})

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
})