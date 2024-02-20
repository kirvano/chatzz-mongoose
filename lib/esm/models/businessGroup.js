"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessGroup = exports.BusinessGroupSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BusinessGroupSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    isPhysicalPerson: {
        type: Boolean,
        default: false,
    },
    document: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        cep: {
            type: String,
            require: true,
        },
        state: {
            type: String,
            require: true,
        },
        streetAddress: {
            type: String,
            require: true,
        },
        houseNumber: {
            type: String,
            require: true,
        },
        complement: {
            type: String,
            require: true,
        },
        neighborhood: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
    },
}, { timestamps: true });
exports.BusinessGroupSchema = BusinessGroupSchema;
const BusinessGroup = mongoose_1.default.model("BusinessGroup", BusinessGroupSchema);
exports.BusinessGroup = BusinessGroup;
