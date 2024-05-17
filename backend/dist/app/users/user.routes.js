import { Router } from "express";
import { loginUser, registerUser } from "./userController.js";
import { validateLogin, validateRegistration } from "./userValidator.js";
const userRouter = Router();
userRouter.post("/auth/register", validateRegistration, registerUser);
userRouter.post("/auth/login", validateLogin, loginUser);
export { userRouter };
//# sourceMappingURL=user.routes.js.map