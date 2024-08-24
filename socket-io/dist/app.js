import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.get("/", (req, res) => {
    res.json({
        id: 121,
    });
});
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("connected one !");
    socket.on("helo", () => {
        console.log("helo emited from some origin....");
    });
    socket.on("join", (payload) => {
        socket.join(payload.auth);
        console.log("joined to room");
    });
});
const port = 8080;
server.listen(port, () => {
    console.log("listing on port " + port);
});
//# sourceMappingURL=app.js.map