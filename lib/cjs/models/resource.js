"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.ResourceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ResourceMappingFieldsSchema = new mongoose_1.default.Schema({
    name: { type: String },
    identification: { type: String },
    value: { type: String },
});
const ResourceMappingEventsSchema = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String },
    identification: { type: String },
    action: { type: String },
});
const ResourceMappingSchema = new mongoose_1.default.Schema({
    receivedData: { type: String },
    fields: [ResourceMappingFieldsSchema],
    events: [ResourceMappingEventsSchema],
}, { timestamps: true });
const ResourceSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    active: { type: Boolean, default: true },
    type: {
        type: String,
        required: true,
        enum: ["attendant", "whatsapp", "webhook", "transmission"],
    },
    resourceType: {
        type: String,
        required: true,
        enum: ["recharge", "subscription"],
    },
    chargeType: {
        type: String,
        required: true,
        enum: ["internal", "external"],
    },
    quantity: { type: Number, default: 0 },
    externalURL: { type: String },
    price: { type: Number, required: true },
    frequency: { type: Number },
    mapping: ResourceMappingSchema,
}, { timestamps: true });
exports.ResourceSchema = ResourceSchema;
const Resource = mongoose_1.default.model("Resource", ResourceSchema);
exports.Resource = Resource;
