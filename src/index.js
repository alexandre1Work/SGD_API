import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clientesRoutes from "./routes/clientesRoutes";
import userRoutes from "./routes/usersRoutes";
import loginRoutes from "./routes/loginRoutes";
import funcionarioRoutes from "./routes/funcionarioRoutes";
import produtoRoutes from "./routes/produtoRoutes";
import servicoRoutes from "./routes/servicoRoutes";
import veiculoRoutes from "./routes/veiculoRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";

dotenv.config();

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middlewares

//Rotas
app.use(clientesRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(funcionarioRoutes);
app.use(funcionarioRoutes);
app.use(produtoRoutes);
app.use(servicoRoutes);
app.use(veiculoRoutes);
app.use(categoriaRoutes);

export const viteNodeApp = app;
