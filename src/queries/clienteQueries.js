import { sql } from "../services/db.js";

export const ClienteQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_cliente`;
  },

  getById: async (id) => {
    return await sql`SELECT * FROM tb_cliente WHERE id_cliente = ${id}`;
  },

  create: async ({ cpf_cnpj, nome, telefone, endereco, email }) => {
    return await sql`INSERT INTO tb_cliente (cpf_cnpj, nome, telefone, endereco, email)
        VALUES (${cpf_cnpj}, ${nome}, ${telefone}, ${endereco}, ${email});`;
  },

  update: async (id, { cpf_cnpj, nome, telefone, endereco, email }) => {
    return await sql`UPDATE tb_cliente
        SET cpf_cnpj = ${cpf_cnpj},  
          nome = ${nome},  
          telefone = ${telefone},  
          endereco = ${endereco},  
          email = ${email}
        WHERE id_cliente = ${id};`;
  },

  delete: async (id) => {
    return await sql`DELETE FROM tb_cliente WHERE id_cliente = ${id}`;
  },
};
