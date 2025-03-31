class Produto {
  constructor(id_produto, nome, un_medida, qtd_estoque) {
    this.id_produto = id_produto;
    this.nome = nome;
    this.un_medida = un_medida;
    this.qtd_estoque = qtd_estoque;
  }

  static validate(produtoData) {
    const errors = [];

    if (!produtoData.nome || produtoData.nome.length < 3) {
      errors.push("O nome do produto deve ter pelo menos 3 caracteres.");
    }

    if (typeof produtoData.qtd_estoque !== "number" || !Number.isInteger(produtoData.qtd_estoque) || produtoData.qtd_estoque < 0) {
      errors.push(
        "A quantidade em estoque deve ser um número inteiro maior ou igual a 0."
      );
    }
    
    //EXIBE TODOS OS ERROS
    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
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
