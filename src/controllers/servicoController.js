import { ServicoQueries } from '../queries/servicoQueries.js';
import ServicoUseCase from '../useCases/servicoUseCase.js';

export async function getServicos(req, res) {
  try {
    const servicos = await ServicoQueries.getAll();
    res.json(servicos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getServico(req, res) {
  try {
    const id = req.params.id;
    const servico = await ServicoUseCase.servicoGetById(id);
    res.json(servico);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getStatusServicos(req, res) {
  try {
    const status = await ServicoUseCase.getStatusServicos();
    res.json(status);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createServico(req, res) {
  try {
    const dados = req.body;
    await ServicoUseCase.createServico(dados);
    res.status(200).send('Servico criado com sucesso!');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateServico(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;

    await ServicoUseCase.updateServico(id, dados);
    res.status(200).send('Servico atualizado com sucesso!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteServico(req, res) {
  try {
    const id = req.params.id;
    await ServicoUseCase.deleteServico(id);
    res.status(200).send('Servico deletado com sucesso!');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
