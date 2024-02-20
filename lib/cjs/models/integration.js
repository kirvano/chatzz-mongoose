"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration = exports.IntegrationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FieldMapper = {
    key: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true },
    prefix: { type: String },
    customField: { type: mongoose_1.default.Types.ObjectId },
};
const EventAction = new mongoose_1.default.Schema({
    type: { type: String, enum: ["chatbot"], required: true },
    data: { type: mongoose_1.default.Schema.Types.Mixed },
});
const EventMapper = new mongoose_1.default.Schema({
    key: { type: String, required: true },
    name: { type: String, required: true },
    actions: [EventAction],
}, { timestamps: true });
const IntegrationSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    executions: { type: Number, default: 0 },
    direction: { type: String, required: true, enum: ["input", "output"] },
    type: { type: String, enum: ["webhooks"], required: true },
    fields: [FieldMapper],
    active: { type: Boolean, default: false },
    events: [EventMapper],
}, { timestamps: true });
exports.IntegrationSchema = IntegrationSchema;
const Integration = mongoose_1.default.model("Integration", IntegrationSchema);
exports.Integration = Integration;