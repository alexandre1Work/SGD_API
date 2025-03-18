import { ClienteQueries } from "../queries/clienteQueries";

export async function getClientes(req, res) {
  try {
    const clientes = await ClienteQueries.getAll();
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar clientes");
  }
}

export async function getCliente(req, res) {
  try {
    const id = req.params.id;
    const cliente = await ClienteQueries.getById(id);
    res.json(cliente);
  } catch (err) {
    res.status(500).send("Erro ao obter o cliente.");
  }
}

export async function createCliente(req, res) {
  try {
    await ClienteQueries.create(novoCliente.toJSON());
    res.status(200).send("Cliente criado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao criar o cliente.");
  }
}

export async function updateCliente(req, res) {
  try {
    const id = req.params.id;
    await ClienteQueries.update(id, req.body);
    res.status(200).send("Cliente atualizado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao atualizar o cliente.");
  }
}

export async function deleteCliente(req, res) {
  try {
    const id = req.params.id;
    await ClienteQueries.delete(id);
    res.status(200).send("Cliente deletado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao deletar o cliente.");
  }
}
