const { default: mongoose } = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    transmissionId: {
      type: String,
      default: "",
    },
    msgId: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    text: {
      type: String,
    },
    url: {
      type: String,
    },
    quotedMessage: {
      type: String,
    },
    caption: {
      type: String,
    },
    type: {
      type: String,
    },
    read: {
      type: Boolean,
    },
    repliedMsgId: { type: String },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const ChatMessage = mongoose.model("ChatMessage", MessageSchema);

module.exports = ChatMessage;
