import express from "express";
import { login } from "../controllers/loginController";

const router = express.Router();

router.route("/login").post(login);

export default router;
