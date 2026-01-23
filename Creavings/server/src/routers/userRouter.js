import express from "express"
import { UserUpdate } from "../controllers/userController.js"
import { Protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.put("/update", Protect,UserUpdate);
router.put("/update", UserUpdate);

export default router;