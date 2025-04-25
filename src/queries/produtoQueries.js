import { sql } from "../services/db.js";
import { parseDateToTimestamp, formatDateToDDMMYYYY } from "../utils/date.js";

export const ProdutoQueries = {
  getAll: async () => {
    const result = await sql`SELECT * FROM tb_produto`;
    return result.map((produto) => ({
      ...produto,
      ultima_atualizacao: formatDateToDDMMYYYY(produto.ultima_atualizacao),
    }));
  },
  getById: async (id) => {
    const result = await sql`SELECT * FROM tb_produto WHERE id_produto = ${id}`;
    if (result.length === 0) return null;
    const produto = result[0];
    return {
      ...produto,
      ultima_atualizacao: formatDateToDDMMYYYY(produto.ultima_atualizacao),
    };
  },
  create: async ({
    nome,
    qtd_estoque,
    categoria,
    preco,
    status,
    ultima_atualizacao,
  }) => {
    const ultimaAtualizacaoDate = parseDateToTimestamp(ultima_atualizacao);
    const result = await sql`
      INSERT INTO tb_produto (nome, qtd_estoque, categoria, preco, status, ultima_atualizacao)
      VALUES (${nome}, ${qtd_estoque}, ${categoria}, ${preco}, ${status}, ${ultimaAtualizacaoDate})
      RETURNING id_produto;`;
    return result.length > 0 ? result[0].id_produto : null;
  },
  update: async (
    id_produto,
    { nome, qtd_estoque, categoria, preco, status, ultima_atualizacao }
  ) => {
    const ultimaAtualizacaoDate = parseDateToTimestamp(ultima_atualizacao);
    return await sql`
      UPDATE tb_produto
      SET nome = ${nome},
          qtd_estoque = ${qtd_estoque},
          categoria = ${categoria},
          preco = ${preco},
          status = ${status},
          ultima_atualizacao = ${ultimaAtualizacaoDate}
      WHERE id_produto = ${id_produto};`;
  },
  delete: async (id_produto) => {
    return await sql`DELETE FROM tb_produto WHERE id_produto = ${id_produto}`;
  },
};

// create table tb_produto(
//     id_produto serial primary key,
//     nome char(30),
//     qtd_estoque int
// );
