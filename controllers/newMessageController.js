// GET /new - Render the new message form
export const getNewMessageForm = (req, res) => {
    res.render("form", { 
        title: "New Message",
        formData: {}  // Add this
    });
};
