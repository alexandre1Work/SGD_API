import bcrypt from "bcrypt";
import { salt } from "../config/bcrypt.js";
import { sql } from "../services/db.js";

export async function register(req, res) {
  try {
    const { nome, cargo, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, salt);

    await sql`
    INSERT INTO tb_usuario (nome, cargo, email, senha)
    VALUES (${nome}, ${cargo}, ${email}, ${senhaHash});`;
    res.status(200).send("Usuário criado com sucesso.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao criar um usuário.");
  }
}
