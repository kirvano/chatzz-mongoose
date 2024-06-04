import mongoose from "mongoose";

const LogsSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ["error", "info", "warning"],
      default: "info",
    },
  },
  { timestamps: true }
);

const IntegrationLogsSchema = new mongoose.Schema(
  {
    integrationId: { type: mongoose.Schema.Types.ObjectId, required: true },
    workspaceId: { type: mongoose.Schema.Types.ObjectId },
    events: [LogsSchema],
    message: { type: String, required: true },
    code: { type: String, default: "" },
    payload: { type: String, default: "" },
    sentPayload: { type: String, default: "" },
    statusCode: { type: Number, default: 0 },
    type: {
      type: String,
      enum: ["error", "info", "warning", "reprocessed"],
      default: "info",
    },
    reprocessParentId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

type IntegrationLogsSchemaType = mongoose.InferSchemaType<
  typeof IntegrationLogsSchema
>;

const IntegrationLogs = mongoose.model(
  "IntegrationLogs",
  IntegrationLogsSchema
);

export { IntegrationLogsSchema, IntegrationLogs, IntegrationLogsSchemaType };
