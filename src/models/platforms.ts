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
      enum: ["pay", "cancel", "inactivate"],
      required: true,
    },
  },
  { timestamps: true }
);

const PlatformsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, required: true },
    executions: { type: Number, default: 0 },
    fields: [FieldMapper],
    active: { type: Boolean, default: false },
    events: [EventMapper],
  },
  { timestamps: true }
);

type PlatformsSchemaType = mongoose.InferSchemaType<typeof PlatformsSchema>;

const Platform = mongoose.model("Platforms", PlatformsSchema);

export { PlatformsSchema, Platform, PlatformsSchemaType };
