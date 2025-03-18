import jwt from "jsonwebtoken";
import { sql } from "../services/db";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await getUserEmail(email);
    const senhaChecada = await bcrypt.compare(senha, usuario.senha);
    if (!senhaChecada) {
      return res.status(422).send("Senha inválida.");
    }

    const token = jwt.sign({ userId: usuario.id, userName: usuario.nome }, process.env.SECRET);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUserEmail(email) {
  const user = await sql`
    SELECT * FROM tb_usuario WHERE email = ${email}
  `;
  return user[0];
}
