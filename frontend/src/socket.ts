"use client";

import { io } from "socket.io-client";

const domain = process.env.communication_domain;

export const socket = io(`${domain}`);