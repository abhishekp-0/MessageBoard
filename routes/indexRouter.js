import { Router } from "express";
import { getAllMessages, getMessageById, messages } from "../controllers/messageController.js";

const indexRouter = Router();

// GET / - Display all messages
indexRouter.get("/", getAllMessages);

// GET /message/:id - Display single message details
indexRouter.get("/message/:id", getMessageById);

export default indexRouter;