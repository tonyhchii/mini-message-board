const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

//app will be able to use files in our local public folder
app.use(express.static(assetsPath));

//listening on PORT 3000
app.listen(PORT, () => {
  console.log(`App initialized at PORT: ${PORT}`);
});
