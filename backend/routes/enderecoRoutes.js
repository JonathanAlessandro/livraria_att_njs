import express from 'express';
import enderecoController from '../controllers/enderecoController.js';

const routeEnderecos = express.Router();

routeEnderecos.post('/', enderecoController.createEndereco);

export default routeEnderecos;