"use client";
import { getCookie } from "cookies-next";
import { io } from "socket.io-client";

const authToken = getCookie("u_state");

const socket = io("http://192.168.23.131:5400", {
  reconnectionDelayMax: 10000,
  auth: {
    token: authToken?authToken:"newUser",
  },
  query: {
    "my-key": authToken?authToken:"newUser",
  },
});

export { socket };
