import { ServicoQueries } from "../queries/servicoQueries.js";
import ServicoUseCase from "../useCases/servicoUseCase.js";

export async function getServicos(req, res) {
  try {
    const servicos = await ServicoQueries.getAll();
    res.json(servicos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar serviços");
  }
}

export async function getServico(req, res) {
  try {
    const id = req.params.id;
    const servico = await ServicoQueries.getById(id);
    res.json(servico);
  } catch (err) {
    res.status(500).send("Erro ao obter o serviço.");
  }
}

export async function createServico(req, res) {
  try {
    const dados = req.body;
    await ServicoUseCase.createServico(dados);
    res.status(200).send("Servico criado com sucesso!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateServico(req, res) {
  try {
    const id = req.params.id;
    await ServicoQueries.update(id, req.body);
    res.status(200).send("Servico atualizado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao atualizar o serviço: " + error);
  }
}

export async function deleteServico(req, res) {
  try {
    const id = req.params.id;
    await ServicoQueries.delete(id);
    res.status(200).send("Servico deletado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao deletar o serviço: " + error);
  }
}
