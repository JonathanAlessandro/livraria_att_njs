import express from "express";
import clienteController from "../controllers/clienteController.js";

const routeClientes = express.Router();

routeClientes.get("/", clienteController.getAllClientes);
routeClientes.get("/email/:email", clienteController.clienteByEmail);

routeClientes.get("/:id", clienteController.getClienteById);

routeClientes.post("/", clienteController.storeCliente);
routeClientes.put("/:id", clienteController.updateCLienteById);
routeClientes.delete("/:id", clienteController.removeCliente);

export default routeClientes;