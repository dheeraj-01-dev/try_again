import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { z } from "zod";

const getSingleBattle_V = async (req: Request, res: Response, next: NextFunction)=>{
  const { _id } = req.params;
  // const schema = z.string({message: "Battle required !"}).length(16, {message: "Invalid battle !"});
  const isValidBattle = isValidObjectId(_id)

  if(isValidBattle){
    return next()
  };
  res.status(400).json({
    success: false,
    error: "Invalid Battle"
  })
};

export { getSingleBattle_V }