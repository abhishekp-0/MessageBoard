import { Router } from "express";
import { getNewMessageForm } from "../controllers/newMessageController.js";
import { createMessage } from "../controllers/messageController.js";

const newRouter = Router();

// GET /new - Render new message form
newRouter.get("/", getNewMessageForm);

// POST /new - Create a new message
newRouter.post("/", createMessage);

export default newRouter;