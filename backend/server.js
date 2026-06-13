import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routeClientes from "./routes/clienteRoutes.js";
import routeCategorias from "./routes/categoriaRoutes.js";
import routeCompras from "./routes/compraRoutes.js";
import routeEditoras from "./routes/editoraRoutes.js";
import routeLivros from "./routes/livroRoutes.js";
import routeUsers from "./routes/userRoutes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT_SERVER || 6050;

app.use("/clientes", routeClientes);
app.use("/categorias", routeCategorias);
app.use("/editoras", routeEditoras);
app.use("/livros", routeLivros);
app.use("/compras", routeCompras);
app.use("/users", routeUsers);

app.listen(PORT, () => {
    return console.log(`Servidor rodando http://localhost:${PORT}`);
});