"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceLogs = exports.ResourceLogsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ResourceLogsSchema = new mongoose_1.default.Schema({
    resourceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    code: { type: String, default: "", required: true },
    payload: { type: String, default: "", required: true },
    type: {
        type: String,
        enum: ["error", "info", "reprocessed"],
        default: "info",
        required: true,
    },
}, { timestamps: true });
exports.ResourceLogsSchema = ResourceLogsSchema;
const ResourceLogs = mongoose_1.default.model("ResourceLogs", ResourceLogsSchema);
exports.ResourceLogs = ResourceLogs;
