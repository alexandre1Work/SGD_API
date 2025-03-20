import express from "express";
import {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";

const router = express.Router();

router.get("/cliente", getClientes);
router.post("/cliente", createCliente);
router.get("/cliente/:id", getCliente);
router.put("/cliente/:id", updateCliente);
router.delete("/cliente/:id", deleteCliente);

export default router;
