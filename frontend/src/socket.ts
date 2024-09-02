"use client";

import { io } from "socket.io-client";

// const domain = "http://192.168.77.131:5500";
const domain = "https://chatbox.battleroya.com";

export const socket = io(domain, {
  reconnectionDelayMax: 10000,
  auth: {
    token: "123"
  },
  query: {
    "my-key": "my-value"
  }
});