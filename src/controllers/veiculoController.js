import { VeiculoQueries } from "../queries/veiculoQueries.js";
import VeiculoUseCase from "../useCases/veiculoUseCase.js";

export async function getVeiculos(req, res) {
  try {
    const veiculos = await VeiculoQueries.getAll();
    res.json(veiculos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar veiculos");
  }
}

export async function getVeiculo(req, res) {
  try {
    const id = req.params.id;
    const veiculo = await VeiculoUseCase.getByIdVeiculo(id);
    res.json(veiculo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createVeiculo(req, res) {
  try {
    const dados = req.body;
    await VeiculoUseCase.createVeiculo(dados);
    res.status(200).send("Veiculo criado com sucesso!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateVeiculo(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;

    await VeiculoUseCase.updateVeiculo(id, dados);
    res.status(200).send("Veiculo atualizado com sucesso");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteVeiculo(req, res) {
  try {
    const id = req.params.id;
    await VeiculoUseCase.deleteVeiculo(id);
    res.status(200).send("Veiculo deletado com sucesso");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
