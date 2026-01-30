import express from "express";

const app = express();

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

app.get("/",(req,res)=> {
    res.status(200).send("Sistema de Gerenciamento de Pedidos");
});

app.get("/cardapio",(req,res) => {
    res.status(200).json(cardapio);
});

export default app;
