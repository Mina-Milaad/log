import { Router } from "express";
import { signin, signup } from "./auth.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
const authRouter = Router();

authRouter.post('/signup', checkEmail, signup)
authRouter.post('/signin', signin)

export default authRouter;