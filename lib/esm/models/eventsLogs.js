"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsLogs = exports.EventsLogsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EventsLogsSchema = new mongoose_1.default.Schema({
    instance: { type: String },
    message: { type: String, required: true },
    stack: { type: String },
    level: { type: String, required: true },
    data: { type: String },
    queue: { type: String },
    createdAt: { type: Date, default: Date.now, expires: "7d" },
});
exports.EventsLogsSchema = EventsLogsSchema;
const EventsLogs = mongoose_1.default.model("EventsLogs", EventsLogsSchema);
exports.EventsLogs = EventsLogs;
