const db = require("../db/queries");

const mainPageController = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};

const newMessagePageController = (req, res) => {
  res.render("new");
};

const submitMessageController = (req, res) => {
  res.total += 1;
  db.addNewMessage({
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
};

const getMessageByID = async (req, res) => {
  const { messageID } = req.params;
  const message = await db.getMessageByID(Number(messageID));
  console.log(message);
  res.render("messageDetails", {
    text: message[0].message,
    user: message[0].username,
    added: message[0].added,
  });
};

module.exports = {
  mainPageController,
  newMessagePageController,
  submitMessageController,
  getMessageByID,
};
