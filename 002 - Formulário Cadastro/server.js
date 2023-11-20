const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 3000

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get("/aluno", function (req, resp) {
    let nome = req.query.nNome
    let sobrenome = req.query.nSobrenome
    let dataNasc = req.query.nNascimento
    let endereco = req.query.nEndereco
    let nomeMae = req.query.nMae
    let nomePai = req.query.nPai
    let email = req.query.nEmail
    let telefone = req.query.nTel
    let serie = req.query.nSerie
    let sexo = req.query.sexo

    let auditiva = req.query.nAuditiva
    let motora = req.query.nMotora
    let visual = req.query.nVisual
    let paralisia = req.query.nParalisia
    let autismo = req.query.nAutismo
    let foro = req.query.nForo
    let aprendizagem = req.query.nAprendizagem
    let habilidades = req.query.nHabilidades

    resp.json({
        "Nome": nome,
        "Sobrenome": sobrenome,
        "Data de Nascimento": dataNasc,
        "Endereço": endereco,
        "Nome da Mãe": nomeMae,
        "Nome do Pai": nomePai,
        "Email": email,
        "Telefone": telefone,
        "Série": serie,
        "Sexo": sexo,
        "Necessidades Especiais": {
            "Auditiva": auditiva,
            "Motora": motora,
            "Visual": visual,
            "Paralisia": paralisia,
            "Autismo": autismo,
            "Foro": foro,
            "Aprendizagem": aprendizagem,
            "Habilidades": habilidades
        }
    })
})

app.post("/aluno", function (req, resp) {
    let nome = req.body.nNome
    let sobrenome = req.body.nSobrenome
    let dataNasc = req.body.nNascimento
    let endereco = req.body.nEndereco
    let nomeMae = req.body.nMae
    let nomePai = req.body.nPai
    let email = req.body.nEmail
    let telefone = req.body.nTel
    let serie = req.body.nSerie
    let sexo = req.body.sexo

    let auditiva = req.body.nAuditiva
    let motora = req.body.nMotora
    let visual = req.body.nVisual
    let paralisia = req.body.nParalisia
    let autismo = req.body.nAutismo
    let foro = req.body.nForo
    let aprendizagem = req.body.nAprendizagem
    let habilidades = req.body.nHabilidades

    resp.json({
        "Nome": nome,
        "Sobrenome": sobrenome,
        "Data de Nascimento": dataNasc,
        "Endereço": endereco,
        "Nome da Mãe": nomeMae,
        "Nome do Pai": nomePai,
        "Email": email,
        "Telefone": telefone,
        "Série": serie,
        "Sexo": sexo,
        "Necessidades Especiais": {
            "Auditiva": auditiva,
            "Motora": motora,
            "Visual": visual,
            "Paralisia": paralisia,
            "Autismo": autismo,
            "Foro": foro,
            "Aprendizagem": aprendizagem,
            "Habilidades": habilidades
        }
    })
})

app.listen(port, () => {
    console.log(`Server na porta: ${port}`)
})
