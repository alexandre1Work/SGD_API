import { sql } from "../services/db";

export const VeiculoQueries = {
  getAll: async () => {
    return await sql`SELECT * FROM tb_veiculo`;
  },
  getById: async (id) => {
    return await sql`SELECT * FROM tb_veiculo WHERE id_veiculo = ${id}`;
  },
  create: async ({ placa, marca, modelo, ano }) => {
    return await sql`INSERT INTO tb_veiculo (placa, marca, modelo, ano)
        VALUES (${placa}, ${marca}, ${modelo}, ${ano});`;
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
