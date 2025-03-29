import Funcionario from "../models/funcionarioModel.js";
import { FuncionarioQueries } from "../queries/funcionarioQueries.js";

class funcionarioUseCase {
  static async createFuncionario(data) {
    Funcionario.validate(data);

    const { cpf, nome, telefone, endereco, email } = data;
    const funcionarioId = await FuncionarioQueries.create({
      cpf,
      nome,
      telefone,
      endereco,
      email,
    });

    const funcionario = new Funcionario(funcionarioId, cpf, nome, telefone, endereco, email);

    return funcionario;
  }

  static async updateFuncionario(id, data) {
    //verifica se o funcionario existe
    const funcionarioExiste = await FuncionarioQueries.getById(id);
    if (!funcionarioExiste) {
      throw new Error("Funcionário não encontrado");
    }

    Funcionario.validate(data);

    await FuncionarioQueries.update(id, data);
    return new Funcionario(
      data.id_funcionario,
      data.cpf,
      data.nome,
      data.telefone,
      data.endereco,
      data.email
    );
  }

  static async getFuncionarioById(id) {
    const funcionario = await FuncionarioQueries.getById(id);
    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    return funcionario;
  }

  static async deleteFuncionario(id) {
    const funcionario = await FuncionarioQueries.getById(id);
    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    await FuncionarioQueries.delete(id);
  }
}

export default funcionarioUseCase;
