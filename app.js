import express from "express";
import Tips from "./src/controllers/tip-controller.js";

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log(`Servidor está rodando em http://localhost:${port}`)
    console.log(`Para acessar a rota de criação de dicas: http://localhost:${port}/create`)
    console.log(`Para acessar a rota de visualização de dicas: http://localhost:${port}/tips`)
})

app.use(express.json())

Tips.rotas(app)
