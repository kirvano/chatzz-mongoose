import mongoose from "mongoose";

const FunnelSalesStepSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const FunnelSalesSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    steps: [FunnelSalesStepSchema],
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: Number, enum: [0, 1], default: 1 },
  },
  { timestamps: true }
);

const FunnelSales = mongoose.model("FunnelSales", FunnelSalesSchema);

export { FunnelSalesSchema, FunnelSales };