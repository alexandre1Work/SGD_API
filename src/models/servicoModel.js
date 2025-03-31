class Servico {
  constructor(id, descricao, valor, dt_servico, id_categoria, id_cliente, status) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.dt_servico = dt_servico;
    this.id_categoria = id_categoria;
    this.id_cliente = id_cliente;
    this.status = status
  }

  static validate(servicoData) {
    const errors = [];

    if (!servicoData.descricao || typeof servicoData.descricao !== "string" || servicoData.descricao.length > 50) {
      errors.push("A descrição é obrigatória e deve ter no máximo 50 caracteres.");
    }

    if (typeof servicoData.valor !== "number" || servicoData.valor <= 0) {
      errors.push("O valor deve ser um número positivo.");
    }

    if (!servicoData.dt_servico || isNaN(Date.parse(servicoData.dt_servico))) {
      errors.push("A data do serviço deve ser uma data válida.");
    }

    if (!Number.isInteger(servicoData.id_categoria) || servicoData.id_categoria <= 0) {
      errors.push("O ID da categoria deve ser um número inteiro positivo.");
    }

    if (!Number.isInteger(servicoData.id_cliente) || servicoData.id_cliente <= 0) {
      errors.push("O ID do cliente deve ser um número inteiro positivo.");
    }
    if (!servicoData.descricao || !servicoData.valor || !servicoData.dt_servico || !servicoData.id_categoria || !servicoData.id_cliente || !servicoData.status) {
      throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
    }

    return errors.length > 0 ? errors : null;
  }
}

export default Servico;
