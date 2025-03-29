import { sql } from "../services/db.js";

export const ServicoQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_servico`;
  },
  getById: async (id_servico) => {
    return await sql`SELECT * FROM tb_servico WHERE id_servico = ${id_servico}`;
  },
  create: async ({ descricao, valor, dt_servico, id_categoria }) => {
    const result = await sql`
    INSERT INTO tb_servico (descricao, valor, dt_servico, id_categoria)
    VALUES (${descricao}, ${valor}, ${dt_servico}, ${id_categoria}) RETURNING id_servico;`;
    return result.length > 0 ? result[0].id_servico : null;
  },
  update: async (id_servico, { descricao, valor, dt_servico, id_categoria }) => {
    return await sql`
    UPDATE tb_servico
    SET descricao = ${descricao},
        valor = ${valor},
        dt_servico = ${dt_servico},
        id_categoria = ${id_categoria}
    WHERE id_servico = ${id_servico};`;
  },
  delete: async (id_servico) => {
    return await sql`DELETE FROM tb_servico WHERE id_servico = ${id_servico}`;
  },
};
