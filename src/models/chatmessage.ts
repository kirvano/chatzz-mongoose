import mongoose from "mongoose";

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
    additionalInfo: {
      senderInfo : {
        id: { type: mongoose.Schema.Types.ObjectId},
        name: { type: String }
      },
      workspaceId: { type: mongoose.Schema.Types.ObjectId },
    },
    repliedMsgId: { type: String },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export type MessageSchemaType = mongoose.InferSchemaType<typeof MessageSchema>;

export const ChatMessage = mongoose.model("ChatMessage", MessageSchema);
