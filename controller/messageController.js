const db = require("../db");

const mainPageController = (req, res) => {
  res.render("index");
};

const newMessagePageController = (req, res) => {
  res.render("new");
};

const submitMessageController = (req, res) => {
  res.total += 1;
  db.addMessage({
    id: res.total,
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
};

const getMessageByID = async (req, res) => {
  const { messageID } = req.params;
  const message = await db.getMessageByID(Number(messageID));
  res.render("messageDetails", {
    text: message.text,
    user: message.user,
    added: message.added,
  });
};

module.exports = {
  mainPageController,
  newMessagePageController,
  submitMessageController,
  getMessageByID,
};
