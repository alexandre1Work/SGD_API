import { sql } from "../services/db.js";

export const FuncionarioQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_funcionario`;
  },
  getById: async (id) => {
    return await sql`SELECT * FROM tb_funcionario WHERE id_funcionario = ${id}`;
  },
  create: async ({ cpf, nome, telefone, endereco, email }) => {
    return await sql`INSERT INTO tb_funcionario (cpf, nome, telefone, endereco, email)
        VALUES (${cpf}, ${nome}, ${telefone}, ${endereco}, ${email});`;
  },
  update: async (id, { cpf, nome, telefone, endereco, email }) => {
    return await sql`UPDATE tb_funcionario
        SET cpf = ${cpf},  
          nome = ${nome},  
          telefone = ${telefone},  
          endereco = ${endereco},  
          email = ${email}
          WHERE id_funcionario = ${id};`;
  },
  delete: async (id) => {
    return await sql`DELETE FROM tb_funcionario WHERE id_funcionario = ${id}`;
  },
};
