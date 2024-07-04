import battleModel from "./battle.model.js";
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
//# sourceMappingURL=battle.controller.js.map