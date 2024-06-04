"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelSales = exports.FunnelSalesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ColorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    hex: { type: String, required: true },
}, { _id: false });
const FunnelSalesStepSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    color: { type: ColorSchema, required: true },
}, { timestamps: true });
const FunnelSalesSchema = new mongoose_1.default.Schema({
    workspaceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    steps: [FunnelSalesStepSchema],
    status: { type: Number, enum: [0, 1], default: 1 },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
}, { timestamps: true });
exports.FunnelSalesSchema = FunnelSalesSchema;
const FunnelSales = mongoose_1.default.model("FunnelSales", FunnelSalesSchema);
exports.FunnelSales = FunnelSales;
