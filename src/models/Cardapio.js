import mongoose from "mongoose";

const cardapioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    descricao: { type: String },
    categoria: { type: String },
    preco: { type: Number },
    disponivel: { type: Boolean }
}, { versionKey: false });

const cardapio = mongoose.model("cardapio", cardapioSchema);

export default cardapio