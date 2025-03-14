import express from "express";

import {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoriaController.js";

const router = express.Router();

router.get("/categoria", getCategorias);
router.get("/categoria", getCategoria);
router.post("/categoria", createCategoria);
router.put("/categoria:id", updateCategoria);
router.delete("/categoria:id", deleteCategoria);
