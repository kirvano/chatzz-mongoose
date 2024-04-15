"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macro = exports.MacroSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MacroSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    category: {
        type: String,
        enum: ["text", "image", "video", "audio", "document", "script"],
        required: true,
    },
    availability: {
        condition: {
            type: String,
            enum: ["public", "private"],
            default: "public",
        },
        users: [mongoose_1.default.Schema.Types.ObjectId],
    },
    groupId: { type: mongoose_1.default.Schema.Types.ObjectId, default: null },
    content: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
}, { timestamps: true });
exports.MacroSchema = MacroSchema;
const Macro = mongoose_1.default.model("Macro", MacroSchema);
exports.Macro = Macro;
