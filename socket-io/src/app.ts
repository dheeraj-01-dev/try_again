import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*", // Allow requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  })
);

app.get("/", (req, res) => {
  res.json({
    id: 121,
  });
});
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://192.168.23.131:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  
  const auth = socket.handshake.auth.token;
  socket.join(auth);
  
});

server.listen(5400, () => {
  console.log("listing on port 5400");
});
