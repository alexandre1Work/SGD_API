import Veiculo from "../models/veiculoModel";
import { VeiculoQueries } from "../queries/veiculoQueries";

class VeiculoUseCase {
  static async createVeiculo(data) {
    Veiculo.validate(data);

    const { placa, modelo, marca, ano } = data;

    const VeiculoId = await VeiculoQueries.create({
      placa,
      modelo,
      marca,
      ano,
    });

    const veiculo = new Veiculo(VeiculoId, placa, modelo, marca, ano);

    return veiculo;
  }

  static async updateVeiculo(id, data) {
    const veiculoExiste = VeiculoQueries.getById(id);
    if (!veiculoExiste) {
      throw new Error("Veículo não encontrado");
    }

    Veiculo.validate(data);

    await VeiculoQueries.update(id, data);

    return new Veiculo(id, data.placa, data.modelo, data.marca, data.ano);
  }

  static async getByIdVeiculo(id) {
    const servico = await VeiculoQueries.getById(id);

    if (!servico) {
      throw new Error("Veiculo não encontrado");
    }

    return servico;
  }

  static async deleteVeiculo(id) {
    const veiculoExiste = VeiculoQueries.getById(id);
    if (!veiculoExiste) {
      throw new Error("Veículo não encontrado");
    }

    await VeiculoQueries.delete(id);
  }
}

export default VeiculoUseCase;