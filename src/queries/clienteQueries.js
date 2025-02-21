import { sql } from "../services/db.js";
import Cliente from "../models/clienteModel.js";

export const ClienteQueries = {
  getAll: async () => {
    const dadosRecuperados = await sql`SELECT * FROM tb_cliente`;
    
    return dadosRecuperados.map(dados => {
      const cliente = new Cliente(dados.id_cliente, dados.cpf_cnpj, dados.nome, dados.telefone, dados.endereco, dados.email);
      return cliente;
    });
  },

  getById: async (id) => {
    const dadosRecuperados = await sql`SELECT * FROM tb_cliente WHERE id_cliente = ${id}`;
    
    if (dadosRecuperados === 0) return null
    
    return new Cliente(
      dadosRecuperados[0].id_cliente,
      dadosRecuperados[0].cpf_cnpj,
      dadosRecuperados[0].nome, 
      dadosRecuperados[0].telefone,
      dadosRecuperados[0].endereco,
      dadosRecuperados[0].email)
  },

  create: async ({ cpf_cnpj, nome, telefone, endereco, email }) => {
    const novoCliente = new Cliente(null, cpf_cnpj, nome, telefone, endereco, email);

    return await sql`INSERT INTO tb_cliente (cpf_cnpj, nome, telefone, endereco, email)
        VALUES (${novoCliente.cpf_cnpj}, ${novoCliente.nome}, ${novoCliente.telefone}, ${novoCliente.endereco}, ${novoCliente.email});`;
  },

  update: async (id, { cpf_cnpj, nome, telefone, endereco, email }) => {
    const clienteAtualizado = new Cliente(id, cpf_cnpj, nome, telefone, endereco, email);

      return await sql`UPDATE tb_cliente
        SET cpf_cnpj = ${clienteAtualizado.cpf_cnpj},  
          nome = ${clienteAtualizado.nome},  
          telefone = ${clienteAtualizado.telefone},  
          endereco = ${clienteAtualizado.endereco},  
          email = ${clienteAtualizado.email}
        WHERE id_cliente = ${id};`;
  },
  
  delete: async (id) => {
    return await sql`DELETE FROM tb_cliente WHERE id_cliente = ${id}`;
  },
};
