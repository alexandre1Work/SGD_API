//MOCK
import { sql } from "../services/db.js";

export const getCliente = async (req, res) => {
  try {
    const clientes = await sql`SELECT * FROM tb_cliente`;
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar clientes");
  }
};

export const createCliente = (req, res) => {
  res.send("Cliente criado");
};

export const updateCliente = (req, res) => {
  res.send("Cliente atualizado");
};
