import { Router } from "express";
import * as messageController from "../controllers/messageController.js";

const indexRouter = Router();

// GET / - Display all messages
indexRouter.get("/", messageController.getAllMessages);

// GET /message/:id - Display single message details
indexRouter.get("/message/:id", messageController.getMessageById);

export default indexRouter;