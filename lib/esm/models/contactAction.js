"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactAction = exports.ContactActionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ContactActionSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    action: {
        title: { type: String, maxlength: 20, required: true },
        description: { type: String, maxlength: 500, default: "" },
        icon: { type: String, required: true },
        day: { type: Number, required: true },
    },
    stepId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    isDefault: { type: Boolean, default: false },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, required: true }
}, { timestamps: true });
exports.ContactAction = mongoose_1.default.model("ContactAction", exports.ContactActionSchema);
