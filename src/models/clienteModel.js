class Cliente {
  constructor(id_cliente, cpf_cnpj, nome, telefone, endereco, email) {
    this.id_cliente = id_cliente;
    this.cpf_cnpj = cpf_cnpj;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
  }

  static validate(clienteData) {
    // Validação de nome
    if (clienteData.nome.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres.");
    }
    // Validação de e-mail
    if (!/\S+@\S+\.\S+/.test(clienteData.email)) {
      throw new Error("E-mail inválido.");
    }
    // Validação de endereço
    if (clienteData.endereco.length < 5) {
      throw new Error("O endereço deve ter pelo menos 5 caracteres.");
    }
    if (clienteData.endereco.length > 30) {
      throw new Error("O endereço não pode ter mais de 30 caracteres.");
    }
    // Validação de telefone
    const telefoneRegex = /^\d{9,}$/;
    if (!telefoneRegex.test(clienteData.telefone)) {
      throw new Error("O telefone deve ter pelo menos 9 dígitos numéricos.");
    }
    // Validação de CPF/CNPJ
    if (clienteData.cpf_cnpj.length === 11 && !validarCpf(clienteData.cpf_cnpj)) {
      throw new Error("CPF inválido.");
    }
    if (clienteData.cpf_cnpj.length === 14 && !validarCnpj(clienteData.cpf_cnpj)) {
      throw new Error("CNPJ inválido.");
    }
  }

  toJSON() {
    return {
      id_cliente: this.id_cliente,
      cpf_cnpj: this.cpf_cnpj,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      email: this.email,
    };
  }
}

// Função de validação de CPF
function validarCpf(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.length === 11;
}

// Função de validação de CNPJ
function validarCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, "");
  return cnpj.length === 14;
}

export default Cliente;