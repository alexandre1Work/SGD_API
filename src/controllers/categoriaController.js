import { categoriaQueries } from "../queries/categoriaQueries.js";

export async function getCategorias(req, res) {
  try {
    const categorias = await categoriaQueries.getAll();
    res.json(categorias);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao buscar categorias");
  }
}

export async function getCategoria(req, res) {
    try{
        const id = req.params.id;
        const categoria = await categoriaQueries.getById(id);
        res.json(categoria)
    }catch(error) {
        console.log(error);
        res.status(500).send("Erro ao obter categoria")
    }
}

export async function createCategoria(req, res) {
    try {
        await categoriaQueries.create(req.body);
        res.status(200).send("Categoria criada com sucesso!");
    } catch(error) {
        console.log(error);
        res.status(500).send("Erro ao criar categoria")
    }
}

export async function updateCategoria(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;

        await categoriaQueries.update(id, dados);
        res.status(200).send("Categoria atualizada com sucesso");
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar categoria")
    }
}

export async function deleteCategoria(req, res) {
    try {
        const id = req.params.id;
        await categoriaQueries.delete(id);
        res.status(200).send("Categoria deletada com sucesso!")
    } catch (error) {
        console.log(error);
        res.status(500).send("Não foi possivel deletar o cliente")
    }
}