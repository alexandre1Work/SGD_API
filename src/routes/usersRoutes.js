import express from "express";
import { getUsers, updateUser, getUser, deleteUser, register } from "../controllers/userController.js";

const router = express.Router();

router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

router.route("/register").post(register);

export default router;
