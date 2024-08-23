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
    origin: "*",
    methods: ["GET", "POST"],
  },
});


interface payloadType {
  auth: string,
  data: any
}

io.on("connection", (socket) => {

  console.log("connected one !")
  socket.on("helo", ()=>{console.log("helo emited from some origin....")})

  socket.on("join", (payload :payloadType)=>{
    socket.join(payload.auth);
    console.log("joined to room");
    
    socket.to(payload.auth).emit("success", {
      success: true,
      data: "joined successfully to " + payload.auth
    })
  })
  
});

const port = 5400;

server.listen(port, () => {
  console.log("listing on port "+port);
});
