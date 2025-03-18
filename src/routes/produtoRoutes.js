import express from "express";

import { getProduto, getProdutos, createProduto, updateProduto, deleteProduto } from "../controllers/produtoController";

const router = express.Router();

router.get("/produto", getProdutos);
router.get("/produto/:id", getProduto);
router.post("/produto", createProduto);
router.put("/produto/:id", updateProduto);
router.delete("/produto/:id", deleteProduto);

export default router;
