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
    const errors = []

    // Validação de nome
    if (clienteData.nome.length < 3) {
      errors.push("O nome deve ter pelo menos 3 caracteres.");
    }
    // Validação de e-mail
    if (!/\S+@\S+\.\S+/.test(clienteData.email)) {
      errors.push("E-mail inválido.");
    }
    // Validação de endereço
    if (clienteData.endereco.length < 5) {
      errors.push("O endereço deve ter pelo menos 5 caracteres.");
    }
    if (clienteData.endereco.length > 30) {
      errors.push("O endereço não pode ter mais de 30 caracteres.");
    }
    // Validação de telefone
    const telefoneRegex = /^\d{9,}$/;
    if (!telefoneRegex.test(clienteData.telefone)) {
      errors.push("O telefone deve ter pelo menos 9 dígitos numéricos.");
    }

    // Remove pontos e traços
    const cpfCnpj = clienteData.cpf_cnpj.replace(/\D/g, "");
    
    if (cpfCnpj.length !== 11 && cpfCnpj.length !== 14) {
      errors.push("CPF ou CNPJ inválido.");
    }

    // Validação de CPF/CNPJ
    if (cpfCnpj.length === 11 && !validarCpf(cpfCnpj)) {
      errors.push("CPF inválido.");
    }
    if (cpfCnpj.length === 14 && !validarCnpj(cpfCnpj)) {
      errors.push("CNPJ inválido.");
    }

    //EXIBE TODOS OS ERROS
    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
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

function validarCpf(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

function validarCnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return resultado === parseInt(digitos.charAt(1));
}

export default Cliente;
