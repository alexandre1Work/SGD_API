import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clientesRoutes from "./routes/clientesRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import funcionarioRoutes from "./routes/funcionarioRoutes.js";

dotenv.config();

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(clientesRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(funcionarioRoutes);

app.listen(3000, () => console.log("Servidor rodando http://www.localhost:3000"));
