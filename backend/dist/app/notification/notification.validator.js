import mongoose, { SchemaTypes } from 'mongoose';
import z from 'zod';
export const riseFriendRequest_V = async (req, res, next) => {
    const { from } = req.headers;
    const { to } = req.body;
    if (from === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        from: z.instanceof(mongoose.Types.ObjectId, { message: "not authorized !" }),
        to: z.instanceof(mongoose.Types.ObjectId, { message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        from: new mongoose.Types.ObjectId(from),
        to: new mongoose.Types.ObjectId(to)
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
export const acceptFriendReqest_V = async (req, res, next) => {
    const { from, to } = req.body;
    if (from === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        from: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" }),
        to: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        from: new SchemaTypes.ObjectId(from),
        to: new SchemaTypes.ObjectId(to)
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
//# sourceMappingURL=notification.validator.js.map