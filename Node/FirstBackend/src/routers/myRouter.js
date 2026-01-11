
import express from "express";
import {
  Userregister,
  UserLogin,
  UserLogout,
} from "../controllers/myControler.js";

const router = express.Router();

router.post("/register", Userregister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

export default router;
