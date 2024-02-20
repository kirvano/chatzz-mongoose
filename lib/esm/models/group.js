"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ParticipantSchema = new mongoose_1.default.Schema({
    jid: { type: String, required: true },
    role: { type: String, enum: ["admin", "superadmin", "member"] },
}, { timestamps: true });
const GroupSchema = new mongoose_1.default.Schema({
    jid: { type: String, required: true },
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ownerJid: { type: String, rdatequired: true },
    description: { type: String },
    restrict: { type: Boolean, required: true },
    announce: { type: Boolean, required: true },
    participants: [ParticipantSchema],
    authorJid: { type: String, required: true },
}, { timestamps: true });
exports.GroupSchema = GroupSchema;
const Group = mongoose_1.default.model("Group", GroupSchema);
exports.Group = Group;
