const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessageByID = async (messageID) => {
  return messages.find((message) => message.id === messageID);
};

const getMessages = () => {
  return messages;
};

const addMessage = (message) => {
  messages.push(message);
};

module.exports = { getMessageByID, getMessages, addMessage };
