"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadHistory = exports.LeadHistorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.LeadHistorySchema = new mongoose_1.default.Schema({
    contactId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    action: {
        type: {
            type: String,
            enum: ["status_update", "attendant_update", "contact_action_update", 'crm_update'],
            required: true,
        },
        data: {
            type: mongoose_1.default.Schema.Types.Mixed,
            required: true,
        },
    },
    author: {
        name: { type: String, required: true },
        _id: { type: mongoose_1.default.Schema.Types.ObjectId },
    },
}, { timestamps: true });
exports.LeadHistory = mongoose_1.default.model("LeadHistory", exports.LeadHistorySchema);
