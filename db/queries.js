import {pool} from "./pool.js";

export const getAllMessages = async () => {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

export const getMessagesCount = async () => {
    const {rows} = await pool.query("SELECT COUNT(*) FROM messages");
    return rows[0].count;
}

export const getMessageById = async (id) => {
    const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

export const createMessage = async (text, username) => {
    await pool.query(
        "INSERT INTO messages (text, username) VALUES ($1, $2)",
        [text, username]
    );
}
