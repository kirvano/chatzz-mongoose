const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    visibility: {
      type: String,
      enum: ["visible", "only_checkout"],
      default: "visible",
    },
    chargeFrequency: { type: Number, required: true },
    freeDays: { type: Number, default: 0 },
    attendants: {
      type: Number,
    },
    massShooting: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: false,
    },
    support: {
      type: Boolean,
      default: false,
    },
    accountManager: {
      type: Boolean,
      default: false,
    },
    onboarding: {
      type: Boolean,
      default: false,
    },
    integration: {
      type: Boolean,
      default: false,
    },
    chatbotAccess: {
      type: Boolean,
      default: false,
    },
    campaignAccess: {
      type: Boolean,
      default: false,
    },
    transmissionAccess: {
      type: Boolean,
      default: false,
    },
    webhooksAccess: {
      type: Boolean,
      default: false,
    },
    funnelSalesAccess: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Plan = mongoose.model("Plan", PlanSchema);
module.exports = Plan;
