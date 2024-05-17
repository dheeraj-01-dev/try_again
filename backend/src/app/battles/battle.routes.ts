import { Request, Response, Router } from "express";
import { getAllBattles, getSingleBattle_C } from "./battle.controller.js";
import { getSingleBattle_V } from "./battle.validator.js";

const battleRouter = Router();

battleRouter.get("/get/all", getAllBattles)
battleRouter.get("/get/:_id", getSingleBattle_V, getSingleBattle_C)


export default battleRouter;