import mongoose from "mongoose";
import { LeadHistory } from "./leadHistory";

const AssignmentHistoryChatSchema = new mongoose.Schema({
  attendantUserId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  action: {
    type: String,
  },
});

const ChatSchema = new mongoose.Schema(
  {
    attendantUserId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    assignmentHistory: [AssignmentHistoryChatSchema],
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    contactOrigin: {
      type: String,
      enum: ["campaigns", "entry_chatbots", "dispatches", "message"],
      default: "message",
    },
    members: {
      type: Array,
    },
    jid: {
      type: String,
    },
    workspaceJid: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    message: {
      type: String,
    },
    status: {
      caption: {
        type: String,
        enum: [
          "aguardando", //Aguardando atendimento
          "bot", //Em atendimento pelo bot
          "user", // Em atendimento por um humano
          "resolvido", //Finalizado com sucesso
          "encerrado", //Finalizado sem sucesso
          "aberto",
        ],
        default: "aguardando",
      },
      updatedBy: {
        userId: {
          type: String,
          default: "",
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
      origin: {
        type: String,
        enum: ["user", "bot"],
        default: "user",
      },
    },
  },
  { timestamps: true }
);

export type ChatSchemaType = mongoose.InferSchemaType<typeof ChatSchema>;

export const LiveChat = mongoose.model("LiveChat", ChatSchema);
