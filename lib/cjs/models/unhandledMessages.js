"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnhandledMessages = exports.UnhandledMessagesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UnhandledMessagesSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true },
    payload: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: "7d" },
});
exports.UnhandledMessagesSchema = UnhandledMessagesSchema;
const UnhandledMessages = mongoose_1.default.model("UnhandledMessages", UnhandledMessagesSchema);
exports.UnhandledMessages = UnhandledMessages;
