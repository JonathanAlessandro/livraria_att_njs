import express from "express";
import compraController from "../controllers/compraController.js";

const routeCompras = express.Router();

routeCompras.get("/", compraController.getAllCompras);
routeCompras.get("/:id", compraController.getComprasById);
routeCompras.post("/", compraController.addCompra);
routeCompras.put("/:id", compraController.updateCompra);
routeCompras.delete("/:id", compraController.deleteCompra);

export default routeCompras;