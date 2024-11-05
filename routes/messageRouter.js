const { Router } = require("express");
const messageRouter = Router();
const {
  mainPageController,
  newMessagePageController,
  submitMessageController,
} = require("../controller/messageController");

messageRouter.get("/", mainPageController);
messageRouter.get("/new", newMessagePageController);
messageRouter.post("/new", submitMessageController);

module.exports = { messageRouter };
