import { Router } from "express";
import { validateBattle } from "./battle.validator";
import { createBattle } from "./battle.controller";

const battleRouter = Router();

battleRouter.post("/create", validateBattle, createBattle)

export default battleRouter;