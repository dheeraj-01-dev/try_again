import notificationModel from "./notification.model.js";
import { userModel } from "../users/userModel.js";
import mongoose from "mongoose";
export const riseFriendRequest_C = async (req, res) => {
    const { from } = req.headers;
    const { to } = req.body;
    const findReq = await notificationModel.findOne({ from, to });
    if (findReq) {
        return res.status(300).json({
            success: false,
            error: "already sent !"
        });
    }
    try {
        await notificationModel.create({
            from,
            to,
            n_type: "Friend request"
        });
        res.status(200).json({
            success: true,
            data: "request sent !"
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};
export const acceptFriendReqest_C = async (req, res) => {
    const { from, to } = req.body;
    const session = await mongoose.startSession();
    await session.startTransaction();
    try {
        const doc = await notificationModel.deleteOne({ from, to }, { session });
        if (doc.deletedCount < 1) {
            await session.abortTransaction();
            await session.endSession();
            res.status(404).json({
                success: false,
                error: "request not found"
            });
            return;
        }
        ;
        await userModel.updateOne({ _id: from }, {
            $addToSet: {
                "friends.allFriends": [to]
            }
        }, { session });
        await userModel.updateOne({ _id: to }, {
            $addToSet: {
                "friends.allFriends": [from]
            }
        }, { session });
        await session.commitTransaction();
        await session.endSession();
        res.status(200).json({
            success: true,
            data: "Accepted Successfully !"
        });
    }
    catch (err) {
        await session.abortTransaction();
        await session.endSession();
        res.status(500).json({
            success: false,
            error: "internal server error !"
        });
    }
};
export const getAllNotification_C = async (req, res) => {
    const { auth } = req.headers;
    if (!auth) {
        return res.status(404).json({
            success: false,
            error: "not authorized !"
        });
    }
    try {
        const notifications = await notificationModel.aggregate([
            {
                '$match': {
                    'to': new mongoose.Types.ObjectId(`${auth}`)
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'from',
                    'foreignField': '_id',
                    'as': 'from'
                }
            }, {
                '$project': {
                    '_id': 1,
                    'to': 1,
                    'n_type': 1,
                    'message': 1,
                    'from': {
                        'userName': 1
                    }
                }
            }
        ]);
        res.status(200).json({
            success: true,
            data: notifications
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};
//# sourceMappingURL=notification.controller.js.map