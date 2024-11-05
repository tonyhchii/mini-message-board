const express = require("express");
const app = express();
const PORT = 8000;
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const { messageRouter } = require("./routes/messageRouter");
const { getMessages } = require("./db");

//setting view engine to read ejs files, and setting path to views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//middleware to receive post
app.use(express.urlencoded({ extended: true }));
//app will be able to use files in our local public folder
app.use(express.static(assetsPath));
//adding messages to our local object middleware
app.use((req, res, next) => {
  res.locals.messages = getMessages();
  res.total = 2;
  next();
});

app.use("/", messageRouter);

//listening on PORT 3000
app.listen(PORT, () => {
  console.log(`App initialized at PORT: ${PORT}`);
});
