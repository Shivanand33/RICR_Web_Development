import express from "express";
import { UserRegister } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", UserRegister);

export default router;
