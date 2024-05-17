import { config } from 'dotenv';
import express from 'express';
import { userRouter } from './app/users/user.routes.js';
import battleRouter from './app/battles/battle.routes.js';
config();
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json({
    limit: 5000000
}), (error, req, res, next) => {
    if (error) {
        return res.status(400).json({
            success: false,
            error
        });
    }
    next();
});
app.use("/user", userRouter);
app.use("/battle", battleRouter);
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "route not found!"
    });
});
app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).json({
            success: false,
            message: "internal server error!"
        });
    }
});
export default app;
//# sourceMappingURL=app.js.map