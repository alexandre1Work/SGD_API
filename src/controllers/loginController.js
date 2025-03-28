import jwt from "jsonwebtoken";
import { sql } from "../services/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    // Verificar se usuário existe
    const usuario = await getUserEmail(email);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado.");
    }

    //comparar senha
    const senhaChecada = await bcrypt.compare(senha, usuario.senha);
    if (!senhaChecada) {
      return res.status(422).send("Senha inválida.");
    }

    //geração do token
    const token = jwt.sign(
      { userId: usuario.id, userName: usuario.nome, userRole: usuario.cargo },
      process.env.SECRET
    );

    res.status(200).json(token);
  } catch (error) {
    res.status(500).send(error);
    res.status(500).send("Erro interno no servidor.");
  }
}

async function getUserEmail(email) {
  const user = await sql`
    SELECT * FROM tb_usuario WHERE email = ${email}
  `;
  return user[0];
}
