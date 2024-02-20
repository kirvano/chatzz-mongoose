"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwaitingResponse = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AwaitingResponseSchema = new mongoose_1.default.Schema({
    workspaceId: {
        type: String,
    },
    flowId: {
        type: String,
    },
    jid: {
        type: String,
    },
    options: {
        type: [mongoose_1.default.Schema.Types.Mixed],
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
    nextStep: {
        type: Object,
    },
    step: {
        type: Object,
    },
    attempted: {
        type: Number,
    },
    idTimesUpJobDispatch: {
        type: String,
    },
    shouldIgnoreResponse: {
        type: Boolean,
    },
}, {
    timestamps: true,
});
exports.AwaitingResponse = mongoose_1.default.model("AwaitingResponse", AwaitingResponseSchema);
