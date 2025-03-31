class Funcionario {
  constructor(id_funcionario, cpf, nome, telefone, endereco, email) {
    this.id_funcionario = id_funcionario;
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;
  }

  static validate(funcionarioData) {
    const errors = []

    if (funcionarioData.nome.length < 3) {
      errors.push("O nome deve ter pelo menos 3 caracteres.");
    }
    // Validação de e-mail
    if (!/\S+@\S+\.\S+/.test(funcionarioData.email)) {
      errors.push("E-mail inválido.");
    }
    // Validação de endereço
    if (funcionarioData.endereco.length < 5) {
      errors.push("O endereço deve ter pelo menos 5 caracteres.");
    }
    if (funcionarioData.endereco.length > 30) {
      errors.push("O endereço não pode ter mais de 30 caracteres.");
    }
    // Validação de telefone
    const telefoneRegex = /^\d{9,}$/;
    if (!telefoneRegex.test(funcionarioData.telefone)) {
      errors.push("O telefone deve ter pelo menos 9 dígitos numéricos.");
    }
    if (funcionarioData.cpf.length !== 11 && !validarCpf(funcionarioData.cpf)) {
      errors.push("CPF inválido.");
    }

    //EXIBE TODOS OS ERROS
    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
    }
  }

  toJSON() {
    return {
      id_funcionario: this.id_funcionario,
      cpf: this.cpf,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      email: this.email,
    };
  }
}

function validarCpf(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) return false;

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

export default Funcionario;
