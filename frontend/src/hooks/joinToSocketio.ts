"use client";

import { socket } from "@/socket";
import { getCookie } from "cookies-next";


const joinToSocket = ()=>{
  const auth = getCookie("i_state");
  
  socket.emit("join", {
    auth
  });
  
}

export { joinToSocket }