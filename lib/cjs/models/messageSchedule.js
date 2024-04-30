"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchedule = exports.MessageScheduleSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MessageScheduleSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    contactId: { type: mongoose_1.default.Schema.Types.ObjectId },
    groupId: { type: mongoose_1.default.Schema.Types.ObjectId },
    jobId: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
    type: { type: String, enum: ["text", "macro", "chatbot"], required: true },
    data: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
}, { timestamps: true });
exports.MessageScheduleSchema = MessageScheduleSchema;
const MessageSchedule = mongoose_1.default.model("MessageSchedule", MessageScheduleSchema);
exports.MessageSchedule = MessageSchedule;
