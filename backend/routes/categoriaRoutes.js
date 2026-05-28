import express from 'express';
import categoriaController from '../controllers/categoriaController.js';

const routeCategorias = express.Router();

routeCategorias.get('/', categoriaController.getAllCategorias);
routeCategorias.get('/:id', categoriaController.getCategoriaById);
routeCategorias.post('/', categoriaController.addCategoria);
routeCategorias.put('/:id', categoriaController.updateCategoria);
routeCategorias.delete('/:id', categoriaController.deleteCategoria);

export default routeCategorias;