"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveChat = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AssignmentHistoryChatSchema = new mongoose_1.default.Schema({
    attendantUserId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        default: null,
    },
    action: {
        type: String,
    },
});
const ChatSchema = new mongoose_1.default.Schema({
    attendantUserId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        default: null,
    },
    assignmentHistory: [AssignmentHistoryChatSchema],
    workspaceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.LiveChat = mongoose_1.default.model("LiveChat", ChatSchema);
