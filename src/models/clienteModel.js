class Cliente {
    // vamos utilizar um dos pilares da oo, encapsulamento ;)
    #id_cliente;
    #cpf_cnpj;
    #nome;
    #telefone;
    #endereco;
    #email;

  constructor(id_cliente, cpf_cnpj, nome, telefone, endereco, email) {

    // // no ato de istânciar testa
    if(cpf_cnpj.length === 11 && !validarCpf(cpf_cnpj)) {
      throw new Error("CPF inválido");
    }

    if(cpf_cnpj.length === 14 && !validarCnpj(cpf_cnpj)) {
      throw new Error("CNPJ inválido");
    }
    
    this.#id_cliente = id_cliente;
    this.#cpf_cnpj = cpf_cnpj
    this.#nome = nome;
    this.#telefone = telefone;
    this.#endereco = endereco;
    this.#email = email;
  }

  get id_cliente() {return this.#id_cliente};
  get nome() {return this.#nome};
  get email() {return this.#email};
  get cpf_cnpj() {return this.#cpf_cnpj};
  get telefone() {return this.#telefone};
  get endereco() {return this.#endereco};

  set nome(novoNome) {
    if (novoNome.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres.");
    }
    this.#nome = novoNome;
  }

  set email(novoEmail) {
    //validação do email
    if (!/\S+@\S+\.\S+/.test(novoEmail)) {
      throw new Error("E-mail inválido.");
    }
    this.#email = novoEmail;
  }  

  set endereco(novoEndereco) {
    if (novoEndereco.length < 5) {
      throw new Error("O endereço deve ter pelo menos 5 caracteres.");
    }
    this.#endereco = novoEndereco
  }

  set telefone(novoTelefone) {
    // deve ter mais de 9 digitos numericos
    const telefoneRegex = /^\d{9,}$/;
    if (!telefoneRegex.test(novoTelefone)) {
      throw new Error("O telefone deve ter pelo menos 9 dígitos numéricos.");
    }
    this.#telefone = novoTelefone;
  }

  // verifica se editar
  set cpf_cnpj(novoCpfCnpj) {
    if (novoCpfCnpj.length === 11 && !validarCpf(novoCpfCnpj)) {
      throw new Error("CPF inválido");
    }

    if (novoCpfCnpj.length === 14 && !validarCnpj(novoCpfCnpj)) {
      throw new Error("CNPJ inválido");
    }
    
    this.#cpf_cnpj = novoCpfCnpj;
  }

    toJSON() {
    return {
      id_cliente: this.id_cliente,  // Usando o getter para obter o valor
      cpf_cnpj: this.cpf_cnpj,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      email: this.email,
    };
  }
}

function validarCpf(cpf) {
    //remove digitos q não são numeros
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.length === 11;
}

function validarCnpj(cnpj) {
  //remove digitos q não são numeros
  cnpj = cnpj.replace(/[^\d]/g, "");

  return cnpj.length === 14;
}

export default Cliente;
