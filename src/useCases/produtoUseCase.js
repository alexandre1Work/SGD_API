import Produto from "../models/produtoModels.js";
import { ProdutoQueries } from "../queries/produtoQueries.js";

class ProdutoUseCase {
  static async createProduto(data) {
    Produto.validate(data);

    const { nome, un_medida, qtd_estoque } = data;

    const produtoId = await ProdutoQueries.create({
      nome,
      un_medida,
      qtd_estoque,
    });

    const produto = new Produto(produtoId, nome, un_medida, qtd_estoque);

    return produto;
  }

  static async updateProduto(id, data) {
    //verificar se o produto existe
    const produtoExiste = await ProdutoQueries.getById(id);
    if (!produtoExiste) {
      throw new Error("Produto não encontrado");
    }

    Produto.validate(data);

    await ProdutoQueries.update(id, data);
    return new Produto(id, data.nome, data.un_medida, data.qtd_estoque);
  }

  static async getProdutoById(id) {
    //verificar se o produto existe
    const produto = await ProdutoQueries.getById(id);
    if (!produto) {
      throw new Error("Produto não encontrado");
    }

    return produto;
  }

  static async deleteProduto(id) {
    const produtoExiste = await ProdutoQueries.getById(id);
    if (!produtoExiste) {
      throw new Error("Produto não encontrado");
    }

    //futuras validações

    await ProdutoQueries.delete(id);
  }
}

export default ProdutoUseCase;
