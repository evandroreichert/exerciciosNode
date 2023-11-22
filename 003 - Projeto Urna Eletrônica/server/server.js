import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'

const app = express()
const port = 3000

app.use(cors())

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