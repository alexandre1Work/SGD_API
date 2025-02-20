class Cliente {
  constructor(id_cliente, cpf_cnpj, nome, telefone, endereco, email) {
    this.id_cliente = id_cliente;
    this.cpf_cnpj = cpf_cnpj;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
  }

  get() {}

  set() {}
}

export default Cliente;
