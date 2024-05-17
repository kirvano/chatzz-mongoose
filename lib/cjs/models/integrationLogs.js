"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationLogs = exports.IntegrationLogsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LogsSchema = new mongoose_1.default.Schema({
    message: { type: String, required: true },
    type: {
        type: String,
        enum: ["error", "info", "warning"],
        default: "info",
    },
}, { timestamps: true });
const IntegrationLogsSchema = new mongoose_1.default.Schema({
    integrationId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId },
    events: [LogsSchema],
    message: { type: String, required: true },
    code: { type: String, default: "" },
    payload: { type: String, default: "" },
    sentPayload: { type: String, default: "" },
    statusCode: { type: Number, default: 0 },
    type: {
        type: String,
        enum: ["error", "info", "warning", "reprocessed"],
        default: "info",
    },
    reprocessParentId: { type: mongoose_1.default.Schema.Types.ObjectId },
}, { timestamps: true });
exports.IntegrationLogsSchema = IntegrationLogsSchema;
const IntegrationLogs = mongoose_1.default.model("IntegrationLogs", IntegrationLogsSchema);
exports.IntegrationLogs = IntegrationLogs;
