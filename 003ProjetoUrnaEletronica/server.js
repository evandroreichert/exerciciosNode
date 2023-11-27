const express = require('express')
const cors = require('cors')
const fs = require('fs/promises')
const path = require('path')
const bodyParser  = require('body-parser')
const { error } = require('console')

const app = express()
const port = 3000

app.use(cors())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "client")))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/cargainicial', (req, res) => {
    async function lerCandidatos() {
        const readCsv = await fs.readFile('config.csv', 'utf-8')
        const candidatos = readCsv.split(',')
        res.send(candidatos)
    }

    lerCandidatos()
})


app.post('/voto', async (req, res) => {
    try {
        let { rg, numeroCandidato, timeStamp } = req.body

        let successMessage = {
            "status": "200",
            "mensagem": "Voto Registrado Com sucesso"
        }
        let errorMessage = {
            "status": "500",
            "mensagem": "Erro ao registrar voto, contate o administrador do sistema"
        }

        await fs.appendFile('votacao.csv', `${rg},${numeroCandidato},${timeStamp}`)

        res.json(successMessage)
    }
    catch (error) {
        console.error("Erro:", error)
        res.json(errorMessage)
    }
})

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
})