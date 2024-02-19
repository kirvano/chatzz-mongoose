const { default: mongoose } = require("mongoose");

const CouponUseSchema = new mongoose.Schema(
  {
    chargeId: { type: String, required: true },
  },
  { timestamps: true }
);

const CouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    type: { type: String, enum: ["percentage", "value"], required: true },
    value: { type: Number, required: true },
    usesQuantity: { type: Number, required: true },
    validMonths: { type: Number, required: true },
    allowedPlans: [mongoose.Schema.Types.ObjectId],
    uses: [CouponUseSchema],
    active: { type: Boolean, default: true },
    expiration: { type: Date },
  },
  { timestamps: true }
);

const Coupon = new mongoose.model("Coupon", CouponSchema);

module.exports = {
  CouponSchema,
  Coupon,
};
