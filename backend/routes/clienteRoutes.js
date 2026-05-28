import express from "express";
import clienteController from "../controllers/clienteController.js";

const routeClientes = express.Router();

routeClientes.get("/", clienteController.getAllClientes);
routeClientes.get("/:email", clienteController.clienteByEmail);
routeClientes.post("/", clienteController.storeCliente);
routeClientes.put("/:id", clienteController.updateCLienteById);
routeClientes.delete("/:id", clienteController.removeCliente);

export default routeClientes;