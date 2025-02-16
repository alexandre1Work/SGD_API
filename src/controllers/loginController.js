import jwt from "jsonwebtoken";
import { sql } from "../services/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export async function login(req, res) {
  const { email, senha } = req.body;
  const id = getUserId(email);
  token = jwt.sign(id, process.env.SECRET);
}

async function getUserId(email) {
  const id = await sql`
  SELECT id FROM tb_usuario WHERE email = ${email};`;
  return id;
}
