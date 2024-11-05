const { Router } = require("express");
const messageRouter = Router();
const {
  mainPageController,
  newMessagePageController,
  submitMessageController,
  getMessageByID,
} = require("../controller/messageController");

messageRouter.get("/", mainPageController);
messageRouter.get("/new", newMessagePageController);
messageRouter.post("/new", submitMessageController);
messageRouter.get("/:messageID", getMessageByID);

module.exports = { messageRouter };
