import { FuncionarioQueries } from "../queries/funcionarioQueries.js";
import funcionarioUseCase from "../useCases/funcionarioUseCase.js";

export async function getFuncionarios(req, res) {
  try {
    const funcionarios = await FuncionarioQueries.getAll();
    res.json(funcionarios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar funcionarios");
  }
}

export async function getFuncionario(req, res) {
  try {
    const id = req.params.id;
    const funcionario = await funcionarioUseCase.getFuncionarioById(id);
    res.json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createFuncionario(req, res) {
  try {
    await funcionarioUseCase.createFuncionario(req.body);
    res.status(200).send("Funcionário criado com sucesso!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateFuncionario(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;

    await funcionarioUseCase.updateFuncionario(id, dados);
    res.status(200).send("Funcionário atualizado com sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteFuncionario(req, res) {
  try {
    const id = req.params.id;
    await funcionarioUseCase.deleteFuncionario(id);
    res.status(200).send("Funcionário deletado com sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
