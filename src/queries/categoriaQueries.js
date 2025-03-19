import { sql } from "../services/db";

export const categoriaQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_categoria`;
  },
  getById: async (id) => {
    return await sql`SELECT * FROM tb_categoria WHERE id_categoria = ${id}`;
  },
  create: async ({ categoria }) => {
    return await sql`INSERT INTO tb_categoria (categoria)
            VALUES (${categoria})`;
  },
  update: async (id, { categoria }) => {
    return await sql`UPDATE tb_categoria
            SET categoria = ${categoria}
            WHERE id_categoria = ${id}`;
  },
  delete: async (id) => {
    return await sql`DELETE FROM tb_categoria WHERE id_categoria = ${id}`;
  },
};
