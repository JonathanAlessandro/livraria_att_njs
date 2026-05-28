import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routeClientes from "./src/routes/clientesRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT_SERVER || 5050;

app.use("/clientes", routeClientes);
app.use("/categorias", routeCategorias);
app.use("/editoras", routeEditoras);
app.use("/livros", routeLivros);
app.use("/compras", routeCompras);


app.listen(PORT, () => {
    return console.log(`Servidor rodando http://localhost:${PORT}`);
});