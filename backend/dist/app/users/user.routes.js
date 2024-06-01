import { Router } from "express";
import { findUser_C, loginUser, registerUser } from "./userController.js";
import { findUser_V, validateLogin, validateRegistration } from "./userValidator.js";
const userRouter = Router();
userRouter.post("/auth/register", validateRegistration, registerUser);
userRouter.post("/auth/login", validateLogin, loginUser);
userRouter.post("/auth/get/:user", findUser_V, findUser_C);
export { userRouter };
//# sourceMappingURL=user.routes.js.map