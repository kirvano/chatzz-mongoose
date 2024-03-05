"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowLogs = exports.FlowLogsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FlowLogsSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId },
    flowId: { type: mongoose_1.default.Schema.Types.ObjectId },
    stepId: { type: mongoose_1.default.Schema.Types.ObjectId },
    jid: { type: String },
    code: { type: String },
    message: { type: String, required: true },
    stack: { type: String },
    payload: { type: String },
}, { timestamps: true });
exports.FlowLogsSchema = FlowLogsSchema;
const FlowLogs = mongoose_1.default.model("FlowLogs", FlowLogsSchema);
exports.FlowLogs = FlowLogs;
