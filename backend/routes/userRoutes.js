import express from "express";
import {
authUser,
getUserProfile,
registerNewUser
} from "../controllers/userController.js";
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.route("/").post(registerNewUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
