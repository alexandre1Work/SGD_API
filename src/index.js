import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clienteRoutes from "./routes/clientesRoutes.js";

dotenv.config();

// Configuração do servidor
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(clienteRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
