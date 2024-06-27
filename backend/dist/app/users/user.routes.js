import { Router } from "express";
import { findUser_C, getAllFriends_C, loginUser, registerUser } from "./userController.js";
import { findUser_V, getAllFriends_V, validateLogin, validateRegistration } from "./userValidator.js";
const userRouter = Router();
userRouter.post("/auth/register", validateRegistration, registerUser);
userRouter.post("/auth/login", validateLogin, loginUser);
userRouter.post("/auth/get/:user", findUser_V, findUser_C);
userRouter.get("/get-friends/all", getAllFriends_V, getAllFriends_C);
export { userRouter };
//# sourceMappingURL=user.routes.js.map