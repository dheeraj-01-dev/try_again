import { Router } from "express";
import { acceptFriendReqest_V, riseFriendRequest_V } from "./notification.validator.js";
import { acceptFriendReqest_C, getAllNotification_C, riseFriendRequest_C } from "./notification.controller.js";

const notificatonRouter = Router();

notificatonRouter.post("/friend-request/create", riseFriendRequest_V, riseFriendRequest_C);
notificatonRouter.post("/friend-request/accept", acceptFriendReqest_V, acceptFriendReqest_C);
notificatonRouter.get("/all", getAllNotification_C);

export default notificatonRouter;