import express from "express";

import {
  getFuncionarios,
  getFuncionario,
  updateFuncionario,
  createFuncionario,
  deleteFuncionario,
} from "../controllers/funcionarioController.js";

const router = express.Router();

router.get("/funcionario", getFuncionarios);
router.get("/funcionario/:id", getFuncionario);
router.post("/funcionario", createFuncionario);
router.put("/funcionario/:id", updateFuncionario);
router.delete("/funcionario/:id", deleteFuncionario);

export default router;
