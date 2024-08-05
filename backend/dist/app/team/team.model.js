import { model, Schema } from "mongoose";
const teamSchema = new Schema({
    admin: {
        type: String,
        ref: "users",
        required: true,
        unique: true
    },
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    members: [
        {
            type: String,
            ref: "users",
            required: true
        }
    ]
});
export const teamModel = model("teams", teamSchema);
//# sourceMappingURL=team.model.js.map