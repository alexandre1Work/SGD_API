import express from "express";
import {
  getCliente,
  createCliente,
  updateCliente,
} from "../controllers/clienteController.js";

const router = express.Router();

router.route("/cliente").get(getCliente).post(createCliente);

router.route("/cliente/:id").put(updateCliente);

export default router;
