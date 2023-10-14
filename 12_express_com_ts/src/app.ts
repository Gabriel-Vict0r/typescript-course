//1 - iniciando o projeto

//2 - inicializar o express
import express from "express";

const app = express()

//3 - rotas com post
app.use(express.json())
app.get('/', (req, res) => {
    return res.send("Hello express");
})
app.post('/api/product', (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado");
})

app.all('/api/check', (req, res) => {
    //req.method = verbo HTTP

    if (req.method === 'POST') {
        return res.send('Inseriu algum registro')
    } else if (req.method === 'GET') {
        return res.send('Leu algum registro')
    } else {
        return res.send('Não podemos realizar essa operação')
    }
})
app.listen(3000, () => {
    console.log('aplicação de ts com express');
})
