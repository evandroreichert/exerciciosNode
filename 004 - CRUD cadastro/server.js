import app from "./src/main.js"

const porta = process.env.PORT || 3030
app.listen(porta, ()=>{
    console.log(`Server Rodando em http://localhost:${porta}`);
} )