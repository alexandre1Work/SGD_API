class Produto {
  constructor(id_produto, nome, un_medida, qtd_estoque) {
    (this.id_produto = id_produto),
      (this.nome = nome),
      (this.un_medida = un_medida),
      (this.qtd_estoque = qtd_estoque);
  }

  static validate(produtoData) {
    if (!produtoData.nome || produtoData.nome.length < 3) {
      throw new Error("O nome do produto deve ter pelo menos 3 caracteres.");
    }

    if (
      typeof produtoData.qtd_estoque !== "number" ||
      !Number.isInteger(produtoData.qtd_estoque) ||
      produtoData.qtd_estoque < 0
    ) {
      throw new Error(
        "A quantidade em estoque deve ser um número inteiro maior ou igual a 0."
      );
    }
  }

  toJSON() {
    return {
      id_produto: this.id_produto,
      nome: this.nome,
      un_medida: this.un_medida,
      qtd_estoque: this.qtd_estoque,
    };
  }
}

export default Produto;
