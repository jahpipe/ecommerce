import { loginController, registerController } from "../../controller/AccountController/AccountController";
import express from "express";

const router = express()

router.post("/login", loginController)
router.post("/register", registerController)


export default router