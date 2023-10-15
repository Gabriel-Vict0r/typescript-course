//1 - iniciando o projeto

//2 - inicializar o express
import express, { NextFunction, Request, Response } from "express";

const app = express()

//3 - rotas com post
app.use(express.json())
app.get('/', (req, res) => {
    return res.send("Hello express");
})
//11 - middlewares para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}
app.use(showPath)
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

//interfaces no express
app.get('/api/interfaces', (req: Request, res: Response) => {
    return res.send('Utilizando as interfaces')
})
//6 - enviando json
app.get('/api/json', (req: Request, res: Response) => {
    return res.json({
        name: 'shirt',
        price: 30,
        color: 'blue',
        sizes: ['p', 'm', 'g']
    })
})

//7 - router paramters
app.get('/api/product/:id', (req: Request, res: Response) => {
    const id: string = req.params.id
    if (id === '1') {
        const product = {
            id: 1,
            name: 'boné',
            price: 10
        }
        return res.json(product)
    } else {
        return res.send('produto não encontrado')
    }
})

//8 rotas complextas
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
    const id = req.params.id;
    const idReview = req.params.idReview;

    return res.send(`Acesssando a review ${id} com a review ${idReview}`)
})
//9 - router handler
const getUser = (req: Request, res: Response) => {
    console.log(`Resgatando o usuário com ID ${req.params.id}`);
    return res.send('O usuário foi encontrado')
}
//10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === '1') {
        console.log('pode seguir');
        next();
    } else {
        console.log("Acesso restrito");

    }
}
app.get('/api/user/:id/acess', checkUser, (req: Request, res: Response) => {
    return res.json({ msg: 'bem vindo a adm' })
})
app.get('/api/user/:id', getUser);

//12 - req e res com generics
app.get('/api/user/:id/details/:name', (req: Request<{ id: string, name: string }>, res: Response<{ status: boolean }>) => {
    console.log(`id: ${req.params.id}`);
    console.log(`name: ${req.params.name}`);

    return res.json({ status: true })
})
//13 - tratando erros
app.get('/api/error', (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado");
    } catch (e: any) {
        res.status(500).json({ msg: e.message })
    }
})

app.listen(3000, () => {
    console.log('aplicação de ts com express');
})