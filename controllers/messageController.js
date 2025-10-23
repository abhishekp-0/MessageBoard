import { MessageNotFoundError } from "../errors/MessageNotFoundError.js";
// In-memory message storage
const messages = [
  {
    text: "Hi there! Just finished building this mini message board.",
    user: "Hunter",
    added: new Date()
  },
  {
    text: "Congrats! Let's get started!",
    user: "Odin",
    added: new Date()
  }
];

// GET / - Display all messages
const getAllMessages = (req, res) => {
    res.render("index", {
        title: "Mini Message Board",
        messages: messages
    });
};

// GET /message/:id - Display single message details
const getMessageById = (req, res) => {
    const messageId = parseInt(req.params.id);
    
    if (messageId >= 0 && messageId < messages.length) {
        res.render("message", {
            title: "Message Details",
            message: messages[messageId],
            id: messageId
        });
    } else {
        throw new MessageNotFoundError("Message not found");
    }
};

// POST /new - Create a new message
const createMessage = (req, res) => {
    const { text, user } = req.body;
    
    messages.push({
        text: text,
        user: user,
        added: new Date()
    });
    
    res.redirect("/");
};

export {
    messages,
    getAllMessages,
    getMessageById,
    createMessage
};
