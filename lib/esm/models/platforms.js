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
        enum: ["active_status", "blocked"],
        required: true,
    },
}, { timestamps: true });
const ReprocessConfigSchema = new mongoose_1.default.Schema({
    delay: { type: Number, required: true, default: 1 },
    order: { type: String, required: true, default: "asc" },
    interval: { type: Number, required: true, default: 7 },
    allowedCodes: { type: [String], required: true, default: [] },
}, { timestamps: true });
const PlatformsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    plan: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    executions: { type: Number, default: 0 },
    reprocessConfigs: ReprocessConfigSchema,
    reprocessStatus: {
        type: String,
        enum: ["executing", "stopped", "stopping"],
        default: "stopped",
    },
    fields: [FieldMapper],
    active: { type: Boolean, default: false },
    events: [EventMapper],
}, { timestamps: true });
exports.PlatformsSchema = PlatformsSchema;
const Platform = mongoose_1.default.model("Platforms", PlatformsSchema);
exports.Platform = Platform;
