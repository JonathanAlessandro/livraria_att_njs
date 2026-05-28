import express from "express";
import livroController from "../controllers/livroController.js";

const routeLivros = express.Router();

routeLivros.get("/", livroController.getAllLivros);
routeLivros.get("/:id", livroController.getLivroById);
routeLivros.post("/", livroController.addLivro);
routeLivros.put("/:id", livroController.updateLivroById);
routeLivros.delete("/:id", livroController.deleteLivroById);

export default routeLivros;