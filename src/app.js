import express from "express";

const app = express();

//Middleware, ter acesso as requisicoes,respostas e acoes
app.use(express.json());

const cardapio = [
    {
        id: 1,
        titulo: "Pizza"
    },
    {
        id: 2,
        titulo: "Hamburger"
    }
]

function buscaLivro(id) {
    return cardapio.findIndex(cardapio_id => {
        return cardapio_id.id === Number(id)
    })
}

app.get("/",(req,res) => {
    res.status(200).send("Sistema de Gerenciamento de Pedidos");
});

app.get("/cardapio",(req,res) => {
    res.status(200).json(cardapio);
});

//Adicionar produto no cardapio

app.post("/cardapio",(req, res) => {
    cardapio.push(req.body);
    res.status(201).send("Produto cadastrado no cardapio com sucesso!")
});

app.get("/cardapio/:id",(req, res) => {
    cardapio
})

export default app;
