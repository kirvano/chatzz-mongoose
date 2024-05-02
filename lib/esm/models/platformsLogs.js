"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformLogs = exports.PlatformLogsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PlatformLogsSchema = new mongoose_1.default.Schema({
    platformId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    code: { type: String, default: "", required: true },
    payload: { type: String, default: "", required: true },
    type: {
        type: String,
        enum: ["error", "info", "reprocessed"],
        default: "info",
        required: true,
    },
    reprocessParentId: { type: mongoose_1.default.Schema.Types.ObjectId },
}, { timestamps: true });
exports.PlatformLogsSchema = PlatformLogsSchema;
const PlatformLogs = mongoose_1.default.model("PlatformLogs", PlatformLogsSchema);
exports.PlatformLogs = PlatformLogs;
