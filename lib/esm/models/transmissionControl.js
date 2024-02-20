"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmissionControl = exports.TransmissionControlSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TransmissionControlSchema = new mongoose_1.default.Schema({
    workspaceId: {
        type: String,
        required: true,
    },
    trasmissionId: {
        type: String,
        required: true,
    },
    flowId: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.TransmissionControlSchema = TransmissionControlSchema;
const TransmissionControl = mongoose_1.default.model("TransmissionControl", TransmissionControlSchema);
exports.TransmissionControl = TransmissionControl;
