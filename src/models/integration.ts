import mongoose from "mongoose";

const FieldMapper = {
  key: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: String, required: true },
  prefix: { type: String },
  customField: { type: mongoose.Schema.Types.ObjectId },
};

const EventAction = new mongoose.Schema({
  type: { type: String, enum: ["chatbot"], required: true },
  data: { type: mongoose.Schema.Types.Mixed },
});

const EventMapper = new mongoose.Schema(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    actions: [EventAction],
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

const IntegrationBodySchema = new mongoose.Schema({
  identification: { type: String, required: true },
  name: { type: String, required: true },
  payloadFieldName: { type: String, required: true },
  isCustomField: { type: Boolean, default: false },
  optional: { type: Boolean, default: true },
});

const IntegrationSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    executions: { type: Number, default: 0 },
    direction: { type: String, required: true, enum: ["input", "output"] },
    type: { type: String, enum: ["webhooks"], required: true },
    headers: { type: mongoose.Schema.Types.Mixed },
    body: [IntegrationBodySchema],
    reprocessConfigs: ReprocessConfigSchema,
    externalURL: { type: String },
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

type IntegrationSchemaType = mongoose.InferSchemaType<typeof IntegrationSchema>;

const Integration = mongoose.model("Integration", IntegrationSchema);

export { IntegrationSchema, Integration, IntegrationSchemaType };
