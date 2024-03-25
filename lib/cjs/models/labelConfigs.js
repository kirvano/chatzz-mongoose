"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelConfigs = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LabelConfigsSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
    fullLogo: { type: String },
    simplifiedLogo: { type: String },
    favicon: { type: String },
    loginBanner: { type: String },
    helpLink: { type: String },
    email: {
        user: { type: String },
        password: { type: String },
        host: { type: String },
        port: { type: String },
    },
    domain: {
        host: { type: String },
    },
}, { timestamps: true });
exports.LabelConfigs = mongoose_1.default.model("LabelConfigs", LabelConfigsSchema);
