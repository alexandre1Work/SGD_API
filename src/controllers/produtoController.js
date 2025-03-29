import { ProdutoQueries } from "../queries/produtoQueries.js";
import ProdutoUseCase from "../useCases/produtoUseCase.js";

export async function getProdutos(req, res) {
  try {
    const produtos = await ProdutoQueries.getAll();
    res.json(produtos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao buscar produtos");
  }
}

export async function getProduto(req, res) {
  try {
    const id = req.params.id;
    const produto = await ProdutoUseCase.getProdutoById(id);
    res.json(produto);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

export async function createProduto(req, res) {
  try {
    const dados = req.body;
    await ProdutoUseCase.createProduto(dados);
    res.status(200).send("Produto criado com sucesso!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateProduto(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    await ProdutoUseCase.updateProduto(id, dados);
    res.status(200).send("Pruduto atualizado com sucesso!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteProduto(req, res) {
  try {
    const id = req.params.id;
    await ProdutoUseCase.deleteProduto(id);
    res.status(200).send("Produto deletado com sucesso");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
