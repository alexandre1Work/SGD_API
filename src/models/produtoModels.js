class Produto {
  constructor(
    id_produto,
    nome,
    qtd_estoque,
    categoria,
    preco,
    status,
    ultima_atualizacao
  ) {
    this.id_produto = id_produto;
    this.nome = nome;
    this.qtd_estoque = qtd_estoque;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
    this.ultima_atualizacao = ultima_atualizacao;
  }

  static validate(produtoData) {
    const errors = [];

    if (!produtoData.nome || produtoData.nome.length < 3) {
      errors.push("O nome do produto deve ter pelo menos 3 caracteres.");
    }

    if (
      typeof produtoData.qtd_estoque !== "number" ||
      !Number.isInteger(produtoData.qtd_estoque) ||
      produtoData.qtd_estoque < 0
    ) {
      errors.push(
        "A quantidade em estoque deve ser um número inteiro maior ou igual a 0."
      );
    }

    if (produtoData.preco !== undefined && produtoData.preco < 0) {
      errors.push("O preço deve ser um número positivo.");
    }
    if (produtoData.status && typeof produtoData.status !== "string") {
      errors.push("Status deve ser uma string.");
    }
    if (produtoData.categoria && typeof produtoData.categoria !== "string") {
      errors.push("Categoria deve ser uma string.");
    }

    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
    }
  }

  toJSON() {
    return {
      id_produto: this.id_produto,
      nome: this.nome,
      qtd_estoque: this.qtd_estoque,
      categoria: this.categoria,
      preco: this.preco,
      status: this.status,
      ultima_atualizacao: this.ultima_atualizacao,
    };
  }
}

export default Produto;
