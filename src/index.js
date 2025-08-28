import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientesRoutes from './routes/clientesRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import servicoRoutes from './routes/servicoRoutes.js';
import veiculoRoutes from './routes/veiculoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import { register } from './controllers/userController.js';

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
app.use(produtoRoutes);
app.use(servicoRoutes);
app.use(veiculoRoutes);
app.use(categoriaRoutes);

// Rota de registro na raiz
app.post('/register', register);

app.get('/', (req, res) => {
  res.send('Rota padrão, nada a ver aqui!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
