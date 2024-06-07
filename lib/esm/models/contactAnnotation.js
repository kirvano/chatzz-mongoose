"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactAnnotation = exports.ContactAnnotationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ContactAnnotationSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    contactId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    author: {
        name: { type: String, required: true },
        _id: { type: mongoose_1.default.Schema.Types.ObjectId, required: true }
    },
}, { timestamps: true });
exports.ContactAnnotation = mongoose_1.default.model("ContactAnnotation", exports.ContactAnnotationSchema);
