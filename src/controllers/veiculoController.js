import { VeiculoQueries } from "../queries/veiculoQueries";

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
    const veiculo = await VeiculoQueries.getById(id);
    res.json(veiculo);
  } catch (error) {
    res.status(500).send("Erro ao obter veiculo");
  }
}

export async function createVeiculo(req, res) {
  try {
    await VeiculoQueries.create(req.body);
    res.status(200).send("Veiculo criado com sucesso!");
  } catch (error) {
    res.status(500).send("Não foi possível criar o veiculo: " + error);
  }
}

export async function updateVeiculo(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;

    await VeiculoQueries.update(id, dados);
    res.status(200).send("Veiculo atualizado com sucesso");
  } catch (error) {
    res.status(500).send("Não foi possível atualizar o veiculo");
  }
}

export async function deleteVeiculo(req, res) {
  try {
    const id = req.params.id;
    await VeiculoQueries.delete(id);
    res.status(200).send("Veiculo deletado com sucesso");
  } catch (error) {
    res.status(500).send("Erro ao deletar o veiculo");
  }
}
