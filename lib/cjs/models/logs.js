"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LogsSchema = new mongoose_1.default.Schema({
    level: {
        type: String,
    },
    message: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    meta: {
        user: {
            type: String,
        },
        err: {
            type: String,
        },
    },
});
exports.Logs = mongoose_1.default.model("Logs", LogsSchema);
