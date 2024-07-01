"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsImport = exports.ContactsImportSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ContactSchema = new mongoose_1.default.Schema({
    data: { type: mongoose_1.default.Schema.Types.Mixed },
});
const ContactLogSchema = new mongoose_1.default.Schema({
    phone: { type: String },
    name: { type: String },
    message: { type: String },
});
const ContactsImportSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId },
    status: { type: String, enum: ["finished", "pending"], default: "pending" },
    contacts: [ContactSchema],
    total: { type: Number },
    errors: [ContactLogSchema],
}, { timestamps: true });
exports.ContactsImportSchema = ContactsImportSchema;
const ContactsImport = mongoose_1.default.model("ContactsImport", ContactsImportSchema);
exports.ContactsImport = ContactsImport;
