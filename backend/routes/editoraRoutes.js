import express from "express";
import editoraController from "../controllers/editoraController.js";

const routeEditoras = express.Router();

routeEditoras.get("/", editoraController.getAllEditoras);
routeEditoras.get("/:id", editoraController.getEditoraById);
routeEditoras.post("/", editoraController.addEditora);
routeEditoras.put("/:id", editoraController.updateEditora);
routeEditoras.delete("/:id", editoraController.deleteEditora);

export default routeEditoras;