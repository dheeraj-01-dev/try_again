import { NextFunction, Request, Response } from 'express'
import mongoose, { SchemaTypes, Types, isValidObjectId } from 'mongoose'
import z from 'zod'

export const riseFriendRequest_V = async (req: Request, res: Response, next: NextFunction) => {
  const { from } = req.headers;
  const { to } = req.body;
  if (from===to) {
    return res.status(404).json({
      success: false,
      error: "illigal operation !"
    })
  }
  const schema = z.object({
    from: z.instanceof(mongoose.Types.ObjectId, {message: "not authorized !"}),
    to: z.instanceof(mongoose.Types.ObjectId, {message: "invalid user"})
  });

  const validSchma = schema.safeParse({
    from: new mongoose.Types.ObjectId(from),
    to: new mongoose.Types.ObjectId(to)
  });
  if(validSchma.success){
    next();
  }else{
    res.status(404).json({
      success: false,
      error: "invlaid input !"
    })
  }
};


export const acceptFriendReqest_V = async (req: Request, res: Response, next: NextFunction) => {
  const { from, to } = req.body;
  if (from===to) {
    return res.status(404).json({
      success: false,
      error: "illigal operation !"
    })
  }
  const schema = z.object({
    from: z.instanceof(mongoose.Schema.ObjectId, {message: "invalid user"}),
    to: z.instanceof(mongoose.Schema.ObjectId, {message: "invalid user"})
  });

  const validSchma = schema.safeParse({
    from: new SchemaTypes.ObjectId(from),
    to: new SchemaTypes.ObjectId(to)
  });

  if(validSchma.success){
    next();
  }else{
    res.status(404).json({
      success: false,
      error: "invlaid input !"
    })
  }
};