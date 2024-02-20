"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.CouponSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CouponUseSchema = new mongoose_1.default.Schema({
    chargeId: { type: String, required: true },
}, { timestamps: true });
const CouponSchema = new mongoose_1.default.Schema({
    code: { type: String, required: true },
    type: { type: String, enum: ["percentage", "value"], required: true },
    value: { type: Number, required: true },
    usesQuantity: { type: Number, required: true },
    validMonths: { type: Number, required: true },
    allowedPlans: [mongoose_1.default.Schema.Types.ObjectId],
    uses: [CouponUseSchema],
    active: { type: Boolean, default: true },
    expiration: { type: Date },
}, { timestamps: true });
exports.CouponSchema = CouponSchema;
const Coupon = mongoose_1.default.model("Coupon", CouponSchema);
exports.Coupon = Coupon;
