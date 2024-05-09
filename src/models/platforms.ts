import mongoose from "mongoose";

const FieldMapper = {
  key: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: String, required: true },
};

const EventMapper = new mongoose.Schema(
  {
    name: { type: String, required: true },
    identification: { type: String, required: true },
    action: {
      type: String,
      enum: ["active_status", "blocked"],
      required: true,
    },
  },
  { timestamps: true }
);

const ReprocessConfigSchema = new mongoose.Schema(
  {
    delay: { type: Number, required: true, default: 1 },
    order: { type: String, required: true, default: "asc" },
    interval: { type: Number, required: true, default: 7 },
    allowedCodes: { type: [String], required: true, default: [] },
  },
  { timestamps: true }
);

const PlatformsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, required: true },
    executions: { type: Number, default: 0 },
    reprocessConfigs: ReprocessConfigSchema,
    reprocessStatus: {
      type: String,
      enum: ["executing", "stopped", "stopping"],
      default: "stopped",
    },
    fields: [FieldMapper],
    active: { type: Boolean, default: false },
    events: [EventMapper],
  },
  { timestamps: true }
);

type PlatformsSchemaType = mongoose.InferSchemaType<typeof PlatformsSchema>;

const Platform = mongoose.model("Platforms", PlatformsSchema);

export { PlatformsSchema, Platform, PlatformsSchemaType };
