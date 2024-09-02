import battleModel from "./battle.model.js";
import mongoose from "mongoose";
import { teamModel } from "../team/team.model.js";
import { userModel } from "../users/userModel.js";
export const getAllBattles = async (req, res) => {
    try {
        const battle = await battleModel.aggregate([
            {
                '$addFields': {
                    'tmpOrder': {
                        '$rand': {}
                    }
                }
            }, {
                '$sort': {
                    'tmpOrder': 1
                }
            }
        ]);
        res.status(200).json({
            success: true,
            length: battle.length,
            battle
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong!"
        });
    }
};
export const getSingleBattle_C = async (req, res) => {
    const { _id } = req.params;
    try {
        const battle = await battleModel.findById(_id);
        if (!battle) {
            return res.status(404).json({
                success: false,
                error: "battle not found !"
            });
        }
        ;
        res.status(200).json({
            success: true,
            data: { battle }
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};
export const joinBattle_C = async (req, res) => {
    const { authorization } = req.headers;
    const { battle, team, members } = req.body;
    const battleInfo = await battleModel.findOne({ _id: battle });
    if (!(battleInfo)) {
        return res.status(400).json({
            success: false,
            error: "battle not found"
        });
    }
    ;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const battleup = await battleModel.updateOne({ _id: battle }, {
            $addToSet: { teams: { team, leader: authorization, members } }
        }, { session, raw: false });
        const teamup = await teamModel.updateOne({ _id: team }, {
            $addToSet: { upcomingContest: { battle, leader: authorization, members } }
        }, { session, raw: false });
        await userModel.updateOne({ userName: authorization }, {
            $inc: { balance: -battleInfo.entry }
        }, { session });
        await session.commitTransaction();
        await session.endSession();
        res.status(200).json({
            success: true,
            data: "Join successfully"
        });
    }
    catch (err) {
        await session.abortTransaction();
        await session.endSession();
        res.status(400).json({
            success: false,
            error: err
        });
    }
};
export const getRegisteredBattle_C = async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return;
    }
    ;
    try {
        const data = await battleModel.aggregate([
            {
                '$match': {
                    '$or': [
                        {
                            'teams.members': 'dheeraj.mafia'
                        }, {
                            'teams.leader': 'dheeraj.mafia'
                        }
                    ]
                }
            }, {
                '$lookup': {
                    'from': 'teams',
                    'localField': 'teams.team',
                    'foreignField': '_id',
                    'as': 'teamDetails'
                }
            }, {
                '$unset': 'teamDetails.upcomingContest'
            }
        ]);
        res.status(200).json({
            success: true,
            data
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};
//# sourceMappingURL=battle.controller.js.map