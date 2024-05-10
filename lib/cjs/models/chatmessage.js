"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema = new mongoose_1.default.Schema({
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
        senderInfo: {
            id: { type: mongoose_1.default.Schema.Types.ObjectId },
            name: { type: String }
        },
        workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId },
    },
    repliedMsgId: { type: String },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});
exports.ChatMessage = mongoose_1.default.model("ChatMessage", MessageSchema);
