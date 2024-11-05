const mainPageController = (req, res) => {
  res.render("index");
};

const newMessagePageController = (req, res) => {
  res.render("new");
};

const submitMessageController = (req, res) => {
  res.locals.messages.push({ user: req.body.user, text: req.body.text });
  res.redirect("/");
};

module.exports = {
  mainPageController,
  newMessagePageController,
  submitMessageController,
};
