import { salt } from "../config/bcrypt.js";
import { sql } from "../services/db.js";
import bcrypt from "bcrypt";

//Rota GETALL não deve existir
export async function getUsers(req, res) {
  try {
    const usuarios = await sql`
    SELECT * FROM tb_usuario`;
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao obter os usuarios");
  }
}

export async function getUser(req, res) {
  try {
    const id = req.params.id;
    const usuario = await sql`
    SELECT * FROM tb_usuario WHERE id=${id}`;
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).send("Erro ao obter o usuario.");
  }
}

export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { nome, cargo, email, senha } = req.body;
    await sql`
    UPDATE tb_usuario
    SET nome = ${nome},
        cargo = ${cargo},
        email = ${email},
        senha = ${senha}
    WHERE id=${id}`;
    res.status(200).send("Usuario editado com sucesso.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao atualizar um usuário.");
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    await sql`
    DELETE FROM tb_usuario WHERE id=${id};`;
    res.status(200).send("Usuario deletado com sucesso.");
  } catch (error) {
    res.status(500).send("Erro ao deletar o usuario.");
  }
}
