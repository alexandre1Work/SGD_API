import { ProdutoQueries } from "../queries/produtoQueries.js"

export async function getProdutos(req, res) {
    try {
        const produtos = await ProdutoQueries.getAll();
        res.json(produtos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao buscar produtos");
    }
}

export async function getProduto(req, res) {
    try {
        const id = req.params.id;
        const produto = await ProdutoQueries.getById(id);
        res.json(produto);
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao buscar o produto");
    }
}

export async function createProduto(req, res) {
    try {
        const dados = req.body
        await ProdutoQueries.create(dados);
        res.status(200).send("Produto criado com sucesso!")
    } catch (error) {
        res.status(500).send("Não foi possível criar um produto!")
    }
}

export async function updateProduto(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body
        await ProdutoQueries.update(id, dados)
        res.status(200).send("Pruduto atualizado com sucesso!")
    } catch (error) {
        res.status(500).send("Não foi possível atualizar produto")
    }
}

export async function deleteProduto(req, res) {
    try {
        const id = req.params.id;
        await ProdutoQueries.delete(id);
        res.status(200).send("Produto deletado com sucesso")
    } catch (error) {
        res.status(500).send("Não foi possivel deletar o produto")
    }
}