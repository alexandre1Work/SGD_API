import express from "express";

import {
    getFuncionarios,
    getFuncionario,
    updateFuncionario,
    createFuncionario,
    deleteFuncionario,
} from "../controllers/funcionarioController.js"

const router = express.Router();

router.get("/funcionarios", getFuncionarios);
router.get("/funcionarios/:id", getFuncionario);
router.post("/funcionarios", createFuncionario);
router.put("/funcionarios/:id", updateFuncionario);
router.delete("/funcionarios/:id", deleteFuncionario);

export default router;