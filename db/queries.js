const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messageboard");
  return rows;
}

async function addNewMessage(message) {
  await pool.query(
    "INSERT into messageboard (message,username,added) VALUES ($1,$2,$3)",
    [message.text, message.user, message.added]
  );
}

async function getMessageByID(id) {
  console.log(id);
  const { rows } = await pool.query(
    "SELECT * FROM messageboard WHERE id = $1",
    [id]
  );
  return rows;
}

module.exports = {
  getAllMessages,
  addNewMessage,
  getMessageByID,
};
