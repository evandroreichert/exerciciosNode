var http = require('http');

const server = http.createServer(function (req, resp) {
    let html

    if (req.url == '/') {
        html =
            `
                <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Início</h1>
                    <p>Seja bem vindo</p>  
                    <a href="/registrar">Cadastre-se</a>          
                </body>
                </html>
            `

    } else if (req.url == '/registrar') {
        html =
            `
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Registrar</title>
            </head>
            <body>
                <form>
                    <h1>Cadastre-se</h1>
                    <label for="nome">Nome: </label>
                    <input type="text" id="nome">
                    
                    <label for="idade">Idade: </label>
                    <input type="number" id="idade">
            
                    <button type="submit">Enviar</button> <br><br>

                    <a href="/">Voltar <<</a> 
                </form>
            </body>
            </html>
            `
    }
    resp.end(html)
})


server.listen(3001)

