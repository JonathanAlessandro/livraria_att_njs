import express from "express";
import livroController from "../controllers/livroController.js";
import validateLivro from "../middlewares/livroMiddleware.js";
import { authenticationToken, adminRole } from "../middlewares/authLoginMiddleware.js";
const routeLivros = express.Router();

routeLivros.get("/", livroController.getAllLivros);
routeLivros.get("/:id", livroController.getLivroById);
routeLivros.post("/", authenticationToken, adminRole("admin", "gerente", "vendedor"), validateLivro, livroController.addLivro);
routeLivros.put("/:id", authenticationToken, adminRole("admin", "gerente", "vendedor"), validateLivro, livroController.updateLivroById);
routeLivros.delete("/:id", authenticationToken, adminRole("admin", "gerente", "vendedor"), livroController.deleteLivroById);

export default routeLivros;