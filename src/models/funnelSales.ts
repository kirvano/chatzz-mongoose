import mongoose from "mongoose";

const ColorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hex: { type: String, required: true },
  },
  { _id: false }
)

const FunnelSalesStepSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: ColorSchema, required: true },
  },
  { timestamps: true }
);

const FunnelSalesSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    steps: [FunnelSalesStepSchema],
    status: { type: Number, enum: [0, 1], default: 1 },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

type FunnelSalesSchemaType = mongoose.InferSchemaType<typeof FunnelSalesSchema>;

const FunnelSales = mongoose.model("FunnelSales", FunnelSalesSchema);

export { FunnelSalesSchema, FunnelSales, FunnelSalesSchemaType };
