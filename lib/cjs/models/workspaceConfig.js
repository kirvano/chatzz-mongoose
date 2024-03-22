"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WorkspaceConfigSchema = new mongoose_1.default.Schema({
    workspaceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    apiUrl: { type: String, default: "" },
    apiSecret: { type: String, default: "" },
}, { timestamps: true });
exports.WorkspaceConfig = mongoose_1.default.model("WorkspaceConfig", WorkspaceConfigSchema);
