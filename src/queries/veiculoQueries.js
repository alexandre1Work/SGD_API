import { sql } from "../services/db.js";

export const VeiculoQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_veiculo`;
  },
  getById: async (id) => {
    const result = await sql`SELECT * FROM tb_veiculo WHERE id_veiculo = ${id}`;
    return result.length > 0 ? result[0] : null; // Retorna null se não encontrar
  },
  create: async ({ placa, marca, modelo, ano }) => {
    const result = await sql`INSERT INTO tb_veiculo (placa, marca, modelo, ano)
        VALUES (${placa}, ${marca}, ${modelo}, ${ano}) RETURNING id_veiculo;`;
    return result.length > 0 ? result[0].id_veiculo : null;
  },
  update: async (id, { placa, marca, modelo, ano }) => {
    return await sql`UPDATE tb_veiculo
        SET placa = ${placa},
          marca = ${marca},
          modelo = ${modelo},
          ano = ${ano}
          WHERE id_veiculo = ${id};`;
  },
  delete: async (id) => {
    return await sql`DELETE FROM tb_veiculo WHERE id_veiculo = ${id}`;
  },
};
