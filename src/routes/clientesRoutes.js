import express from "express";
import {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";

const router = express.Router();

router.route("/cliente").get(getClientes);
router.route("/cliente/:id").get(getCliente);
router.route("/cliente").post(createCliente);
router.route("/cliente/:id").put(updateCliente);
router.route("/cliente/:id").delete(deleteCliente);

export default router;
