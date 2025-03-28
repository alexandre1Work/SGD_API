import clienteUseCase from "../useCases/clienteUseCase.js";
import { ClienteQueries } from "../queries/clienteQueries.js";

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
    const cliente = await clienteUseCase.getClienteById(id);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createCliente(req, res) {
  try {
    await clienteUseCase.createCliente(req.body);
    res.status(200).send("Cliente criado com sucesso!");
  } catch (error) {
    res.status(500).json({ error: error.message }); //400 - servidor não pode processar a requisição devido a erros no lado do cliente
  }
}

export async function updateCliente(req, res) {
  try {
    const id = req.params.id;
    await clienteUseCase.updateCliente(id, req.body);
    res.status(200).send("Cliente atualizado com sucesso!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCliente(req, res) {
  try {
    const id = req.params.id;
    await clienteUseCase.deleteCliente(id);
    res.status(200).send("Cliente deletado com sucesso!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

