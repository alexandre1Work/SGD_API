import { sql } from "../services/db.js";

export async function getClientes(req, res) {
  try {
    const clientes = await sql`SELECT * FROM tb_cliente`;
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar clientes");
  }
}

export async function getCliente(req, res) {
  try {
    const id = req.params.id;
    const cliente = await sql`
    SELECT * FROM tb_cliente
    WHERE id_cliente = ${id}`;
    res.json(cliente);
  } catch (err) {}
}

export async function createCliente(req, res) {
  try {
    const { cpf_cnpj, nome, telefone, endereco, email } = req.body;
    await sql`
    INSERT INTO tb_cliente (cpf_cnpj, nome, telefone, endereco, email)  
    VALUES (${cpf_cnpj}, ${nome}, ${telefone}, ${endereco}, ${email});`;
    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(500).send("Não foi possivel encontrar o cliente.");
  }
}

export async function updateCliente(req, res) {
  try {
    const id = req.params.id;
    const { cpf_cnpj, nome, telefone, endereco, email } = req.body;
    await sql`
    UPDATE tb_cliente  
    SET cpf_cnpj = ${cpf_cnpj},  
    nome = ${nome},  
    telefone = ${telefone},  
    endereco = ${endereco},  
    email = ${email}  
    WHERE id = ${id};`;
  } catch (error) {
    res.status(500).send("Erro ao atualizar o cliente.");
  }
}

export async function deleteCliente(req, res) {
  try {
    const id = req.params.id;
    await sql`
    DELETE FROM tb_cliente WHERE id_cliente = ${id};`;
  } catch (error) {
    res.status(500).send("Erro ao deletar o cliente.");
  }
}
