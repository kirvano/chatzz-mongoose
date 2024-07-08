"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelConfigs = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LabelConfigsSchema = new mongoose_1.default.Schema({
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    fullLogo: { type: String, default: "" },
    simplifiedLogo: { type: String, default: "" },
    favicon: { type: String, default: "" },
    loginBanner: { type: String, default: "" },
    helpLink: { type: String, default: "" },
    helpIcon: { type: String, default: "" },
    helpIconFloatShow: { type: Boolean, default: true },
    disableUserRegistration: { type: Boolean, default: false },
    disable: { type: Boolean, default: true },
    email: {
        user: { type: String, default: "" },
        password: { type: String, default: "" },
        host: { type: String, default: "" },
        port: { type: String, default: "" },
    },
    domain: {
        host: { type: String, default: "" },
        id: { type: String, default: "" },
        txtName: { type: String, default: "" },
        txtValue: { type: String, default: "" },
    },
}, { timestamps: true });
exports.LabelConfigs = mongoose_1.default.model("LabelConfigs", LabelConfigsSchema);
