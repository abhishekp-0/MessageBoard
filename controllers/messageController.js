import { MessageNotFoundError } from "../errors/MessageNotFoundError.js";
import * as db from "../db/queries.js";

// GET / - Display all messages
export const getAllMessages = async (req, res, next) => {
    try {
        const messages = await db.getAllMessages();
        res.render("index", {
            title: "Mini Message Board",
            messages: messages
        });
    } catch (error) {
        next(error);
    }
};

// GET /message/:id - Display single message details
export const getMessageById = async (req, res, next) => {
    try {
        const messageId = parseInt(req.params.id)+1;
        const message = await db.getMessageById(messageId);
        
        if (!message) {
            throw new MessageNotFoundError("Message not found");
        }
        
        res.render("message", {
            title: "Message Details",
            message: message,
            id: messageId
        });
    } catch (error) {
        next(error);
    }
};

// POST /new - Create a new message
export const createMessage = async (req, res, next) => {
    try {
        const { text, user } = req.body;
        await db.createMessage(text, user);
        res.redirect("/");
    } catch (error) {
        next(error);
    }
};

