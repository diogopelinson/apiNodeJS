import express from "express";
import connectDB from "./config/dbConnect.js";

const app = express();

const connDB = await connectDB();

connDB.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connDB.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

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

function buscaCardapio(id) {
    return cardapio.findIndex(cardapio_id => {
        return cardapio_id.id === Number(id);
    });
};

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
    const index = buscaCardapio(req.params.id);
    res.status(200).json(cardapio[index]);
});

app.put("/cardapio/:id", (req, res) => {
    const index = buscaCardapio(req.params.id);
    cardapio[index].titulo = req.body.titulo;
    res.status(200).json(cardapio);
});

app.delete("/cardapio/:id", (req, res) => {
    const index = buscaCardapio(req.params.id);
    cardapio.splice(index, 1);
    res.status(200).send("Produto deletado com sucesso!")
});

export default app;