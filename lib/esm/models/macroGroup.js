"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroGroup = exports.MacroGroupSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MacroGroupSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, maxLength: 20 },
    color: {
        name: { type: String, required: true },
        hex: { type: String, required: true },
    },
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedBy: { type: mongoose_1.default.Schema.Types.ObjectId },
}, { timestamps: true });
exports.MacroGroupSchema = MacroGroupSchema;
const MacroGroup = mongoose_1.default.model("MacroGroup", MacroGroupSchema);
exports.MacroGroup = MacroGroup;
