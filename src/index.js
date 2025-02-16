import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clienteRoutes from "./routes/clientesRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";

dotenv.config();

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(clienteRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(registerRoutes);

app.listen(3000, () =>
  console.log("Servidor rodando http://www.localhost:3000")
);
