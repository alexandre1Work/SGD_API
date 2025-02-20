import { FuncionarioQueries } from "../services/funcionarioQueries.js";

export async function getFuncionarios(req, res) {
    try {
        const funcionarios = await FuncionarioQueries.getAll();
        res.json(funcionarios);
    } catch(error) {
        console.error(error);
        res.status(500).send("Erro ao buscar funcionarios");
    }
}

export async function getFuncionario(req, res) {
    try {
        const id = req.params.id;
        const funcionario = await FuncionarioQueries.getById(id);
        res.json(funcionario);
    } catch(error) {
        res.status(500).send("Erro ao obter funcionário");
    }
}

export async function createFuncionario(req, res) {
    try {
        await FuncionarioQueries.create(req.body);
        res.status(200).send("Funcionário criado com sucesso!");
    } catch(error) {
        res.status(500).send("Não foi possível criar o funcionário");
    }
}

export async function updateFuncionario(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        
        await FuncionarioQueries.update(id, dados)
        res.status(200).send("Funcionário atualizado com sucesso");
    } catch (error) {
        res.status(500).send("Não foi possível atualizar o funcionário");
    }
}

export async function deleteFuncionario(req, res) {
    try {
        const id = req.params.id;
        await FuncionarioQueries.delete(id);
        res.status(200).send("Funcionário deletado com sucesso");
    } catch (error) {
        res.status(500).send("Erro ao deletar o funcionario");
    }
}   