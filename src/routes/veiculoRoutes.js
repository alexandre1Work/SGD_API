import express from "express";

import { getVeiculos, getVeiculo, updateVeiculo, createVeiculo, deleteVeiculo } from "../controllers/veiculoController";

const router = express.Router();

router.get("/veiculo", getVeiculos);
router.get("/veiculo/:id", getVeiculo);
router.post("/veiculo", createVeiculo);
router.put("/veiculo/:id", updateVeiculo);
router.delete("/veiculo/:id", deleteVeiculo);

export default router;
