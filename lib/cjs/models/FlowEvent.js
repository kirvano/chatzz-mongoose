"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowEvent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FlowEventsSchema = new mongoose_1.default.Schema({
    flowId: {
        type: String,
    },
    jid: {
        type: String,
    },
    stepId: {
        type: String,
    },
    isAwaitingResponse: {
        type: Boolean,
        default: false,
    },
    baileysResponse: {
        type: Object,
    },
    sent: {
        type: Object,
    },
    variable: {
        type: String,
        default: null,
    },
    value: {
        type: Object,
        default: null,
    },
    waitUntil: {
        type: Date,
        default: null,
    },
    attempts: {
        type: Number,
        default: 1,
    },
}, {
    timestamps: true,
});
exports.FlowEvent = mongoose_1.default.model("FlowEvent", FlowEventsSchema);
