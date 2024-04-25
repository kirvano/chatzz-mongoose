"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = exports.PlatformsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FieldMapper = {
    key: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true },
};
const EventMapper = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    identification: { type: String, required: true },
    action: {
        type: String,
        enum: ["pay", "cancel", "inactivate"],
        required: true,
    },
}, { timestamps: true });
const PlatformsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    plan: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    executions: { type: Number, default: 0 },
    fields: [FieldMapper],
    active: { type: Boolean, default: false },
    events: [EventMapper],
}, { timestamps: true });
exports.PlatformsSchema = PlatformsSchema;
const Platform = mongoose_1.default.model("Platforms", PlatformsSchema);
exports.Platform = Platform;
