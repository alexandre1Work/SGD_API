import Servico from '../models/servicoModel.js';
import { ServicoQueries } from '../queries/servicoQueries.js';

class ServicoUseCase {
  static async createServico(data) {
    Servico.validate(data);

    const { descricao, valor, dt_servico, id_categoria, id_cliente, status } = data;

    const servicoId = await ServicoQueries.create({
      descricao,
      valor,
      dt_servico,
      id_categoria,
      id_cliente,
      status
    });

    const servico = new Servico(servicoId, descricao, valor, dt_servico, id_categoria, id_cliente, status);

    return servico;
  }

  static async getStatusServicos() {
    const status = await ServicoQueries.getStatus();
    return status.map(item => ({
      name: item.name,
      value: parseInt(item.value, 10)
    }));
  }

  static async updateServico(id, data) {
    const servicoExiste = await ServicoQueries.getById(id);
    if (!servicoExiste) {
      throw new Error('Serivco não encontrado');
    }

    Servico.validate(data);

    await ServicoQueries.update(id, data);
    return new Servico(id, data.descricao, data.valor, data.dt_servico, data.id_categoria, data.id_cliente);
  }

  static async servicoGetById(id) {
    const servico = await ServicoQueries.getById(id);

    if (!servico) {
      throw new Error('Serviço não encontrado');
    }

    return servico;
  }

  static async deleteServico(id) {
    const servico = await ServicoQueries.getById(id);

    if (!servico) {
      throw new Error('Serviço não encontrado');
    }

    await ServicoQueries.delete(id);
  }
}

export default ServicoUseCase;
