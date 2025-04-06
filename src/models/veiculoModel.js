class Veiculo {
  constructor(id, placa, modelo, marca, ano) {
    this.id = id;
    this.placa = placa;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }

  static validate(veiculoData) {
    const errors = [];

    const placaRegex = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i;
    if (!veiculoData.placa) {
      errors.push("Placa é obrigatória");
    } else if (!placaRegex.test(veiculoData.placa)) {
      errors.push("Placa Inválida");
    }

    if (!veiculoData.modelo) {
      errors.push("O modelo é obrigátorio");
    }

    if (!veiculoData.marca) {
      errors.push("O modelo é obrigátorio");
    }

    if (errors.length > 0) {
      throw new Error(errors.join(" | "));
    }
  }

  toJSON() {
    return {
      id: this.id,
      placa: this.placa,
      modelo: this.modelo,
      marca: this.marca,
      ano: this.ano,
    };
  }
}

export default Veiculo;
