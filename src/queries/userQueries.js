import { sql } from "../services/db";

const userQueries = {
  getAll: async () => {
    const result = await sql`SELECT * FROM tb_usuario`;
    return result;
  },

  getById: async (id) => {
    const result = await sql`SELECT * FROM tb_usuario WHERE id=${id}`;
  },

  create: async (nome, cargo, email, senha, id) => {},

  uptade: async (nome, cargo, email, senha, id) => {
    await sql`UPDATE tb_usuario
    SET nome = ${nome},
        cargo = ${cargo},
        email = ${email},
        senha = ${senha}
    WHERE id=${id}`;
    return;
  },

  delete: async (id) => {
    await sql`DELETE FROM tb_usuario WHERE id=${id};`;
    return;
  },
};
