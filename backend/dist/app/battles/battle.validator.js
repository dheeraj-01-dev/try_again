import { isValidObjectId } from "mongoose";
const getSingleBattle_V = async (req, res, next) => {
    const { _id } = req.params;
    const isValidBattle = isValidObjectId(_id);
    if (isValidBattle) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        error: "Invalid Battle"
    });
};
export { getSingleBattle_V };
//# sourceMappingURL=battle.validator.js.map