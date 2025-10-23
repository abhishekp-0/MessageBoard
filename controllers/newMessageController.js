// GET /new - Render the new message form
const getNewMessageForm = (req, res) => {
    res.render("form", {
        title: "New Message"
    });
};

export {
    getNewMessageForm
};
