"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = exports.ContactSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ContactAutomationSchema = new mongoose_1.default.Schema({
    paused: {
        type: Boolean,
        default: false,
    },
    pausedForMs: {
        type: Number,
        default: null,
    },
    pausedTill: {
        type: Date,
        default: null,
    },
});
const ContactSchema = new mongoose_1.default.Schema({
    automation: ContactAutomationSchema,
    workspaceId: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    jid: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    email: {
        type: String,
    },
    leadValue: {
        type: Number,
        default: 0,
    },
    leadOrigin: {
        type: String,
        default: "",
    },
    tags: [
        {
            _id: { type: String },
        },
    ],
    campaigns: [
        {
            _id: { type: String },
        },
    ],
    fields: [
        {
            _id: { type: String, default: "" },
            value: {
                type: String,
                default: "",
            },
        },
    ],
    funnelStep: { type: mongoose_1.default.Schema.Types.ObjectId },
    funnelStepDate: { type: Date },
    actions: [
        {
            _id: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
            isCompleted: { type: Boolean, default: false, required: true },
        },
    ],
    onWhatsapp: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    verifiedAt: { type: Date },
}, { timestamps: true });
exports.ContactSchema = ContactSchema;
const Contact = mongoose_1.default.model("Contact", ContactSchema);
exports.Contact = Contact;
