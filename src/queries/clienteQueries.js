import { sql } from "../services/db.js";

export const ClienteQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_cliente`;
  },

  getById: async (id) => {
    const result = await sql`SELECT * FROM tb_cliente WHERE id_cliente = ${id}`;
    return result.length > 0 ? result[0] : null; // Retorna null se não encontrar
  },

  create: async ({ cpf_cnpj, nome, telefone, endereco, email }) => {
    const result =
      await sql` INSERT INTO tb_cliente (cpf_cnpj, nome, telefone, endereco, email)
      VALUES (${cpf_cnpj}, ${nome}, ${telefone}, ${endereco}, ${email})
      RETURNING id_cliente;`;
    return result.length > 0 ? result[0].id_cliente : null;
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
