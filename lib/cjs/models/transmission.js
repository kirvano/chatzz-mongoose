"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transmission = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TransmissionSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
    },
    phoneNumbers: {
        type: Array,
    },
    name: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
exports.Transmission = mongoose_1.default.model("Transmission", TransmissionSchema);
