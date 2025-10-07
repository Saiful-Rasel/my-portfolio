import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router()

router.post('/login',authController.loginAdmin)
    
export const authRouter = router