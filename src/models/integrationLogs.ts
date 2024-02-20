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
    events: [LogsSchema],
    payloads: [{ type: mongoose.Schema.Types.Mixed, maxlength: 50 }],
  },
  { timestamps: true }
);

const IntegrationLogs = mongoose.model(
  "IntegrationLogs",
  IntegrationLogsSchema
);

export { IntegrationLogsSchema, IntegrationLogs };
