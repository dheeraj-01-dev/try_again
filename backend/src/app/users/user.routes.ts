import { Router } from "express";
import { findUser_C, getAllFriends_C, getSingleUser, loginUser, registerUser, resetPass, updateUserData } from "./userController.js";
import { findUser_V, getAllFriends_V, validateLogin, validateRegistration } from "./userValidator.js";

const userRouter = Router();

userRouter.post("/auth/register" , validateRegistration, registerUser)
userRouter.post("/auth/login",validateLogin, loginUser)
userRouter.post("/auth/get/:user", findUser_V, findUser_C)
userRouter.get("/get-friends/all",getAllFriends_V, getAllFriends_C)
// userRouter.get("/auth/get/:user", getSingleUser)
// userRouter.put("/auth/recover", resetPass)
// userRouter.put("/auth/update/:user", updateUserData)

export { userRouter }