import { sql } from '../services/db.js';

export const ServicoQueries = {
  getAll: async () => {
    return await sql`
    SELECT 
      s.id_servico,
      s.descricao,
      s.valor,
      s.dt_servico,
      s.status,
      c.id_cliente,
      c.nome AS cliente_nome,
      c.cpf_cnpj AS cliente_cpf,
      c.endereco AS cliente_endereco,
      c.telefone AS cliente_telefone,
      s.id_categoria,
      cat.categoria AS categoria_nome
    FROM tb_servico s
    JOIN tb_cliente c ON s.id_cliente = c.id_cliente
    JOIN tb_categoria cat ON s.id_categoria = cat.id_categoria;
  `;
  },

  getById: async id_servico => {
    const result = await sql`
    SELECT 
      s.id_servico,
      s.descricao,
      s.valor,
      s.dt_servico,
      s.status,
      c.id_cliente,
      c.nome AS cliente_nome,
      c.cpf_cnpj AS cliente_cpf,
      c.endereco AS cliente_endereco,
      c.telefone AS cliente_telefone,
      s.id_categoria,
      cat.categoria AS categoria_nome
    FROM tb_servico s
    JOIN tb_cliente c ON s.id_cliente = c.id_cliente
    JOIN tb_categoria cat ON s.id_categoria = cat.id_categoria
    WHERE s.id_servico = ${id_servico};
  `;
    return result.length > 0 ? result[0] : null;
  },

  getStatus: async () => {
    const result = await sql`
    SELECT status, COUNT(*) AS total
    FROM tb_servico
    GROUP BY status;
    `;
    return result;
  },

  create: async ({ descricao, valor, dt_servico, id_categoria, id_cliente, status }) => {
    const result = await sql`
    INSERT INTO tb_servico (descricao, valor, dt_servico, id_categoria, id_cliente, status)
    VALUES (${descricao}, ${valor}, ${dt_servico}, ${id_categoria}, ${id_cliente}, ${status})
    RETURNING id_servico;
  `;
    return result.length > 0 ? result[0].id_servico : null;
  },

  update: async (id_servico, { descricao, valor, dt_servico, id_categoria, id_cliente, status }) => {
    return await sql`
      UPDATE tb_servico
      SET descricao = ${descricao},
          valor = ${valor},
          dt_servico = ${dt_servico},
          id_categoria = ${id_categoria},
          id_cliente = ${id_cliente},
          status = ${status}
      WHERE id_servico = ${id_servico};
    `;
  },

  delete: async id_servico => {
    return await sql`DELETE FROM tb_servico WHERE id_servico = ${id_servico}`;
  }
};
