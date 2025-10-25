import {body, validationResult, matchedData} from "express-validator";
import { MessageNotFoundError } from "../errors/MessageNotFoundError.js";
import * as db from "../db/queries.js";

const validateMessage = [
    body("text")
        .trim()
        .notEmpty().withMessage("Message is required!")
        .isLength({ min: 1, max: 280 }).withMessage("Message must be less than 280 characters!"),
    body("user")
        .trim()
        .notEmpty().withMessage("Username is required!")
        .isLength({ min: 1, max: 50 }).withMessage("Username must be less than 50 characters!")
        .isAlphanumeric().withMessage("Username must contain only letters and numbers!"),
];
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
export const createMessage = [
    validateMessage,
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                title: "New Message",
                errors: errors.array(),
                formData: req.body  // Add this line
            });
        }
        try {
            const { text, user } = matchedData(req);
            await db.createMessage(text, user);
            res.redirect("/");
        } catch (error) {
            next(error);
        }
    }
];

