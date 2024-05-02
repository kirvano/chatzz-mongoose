import mongoose from "mongoose";

const PlatformLogsSchema = new mongoose.Schema(
  {
    platformId: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    code: { type: String, default: "", required: true },
    payload: { type: String, default: "", required: true },
    type: {
      type: String,
      enum: ["error", "info", "reprocessed"],
      default: "info",
      required: true,
    },
    reprocessParentId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

type PlatformLogsSchemaType = mongoose.InferSchemaType<
  typeof PlatformLogsSchema
>;

const PlatformLogs = mongoose.model("PlatformLogs", PlatformLogsSchema);

export { PlatformLogsSchema, PlatformLogs, PlatformLogsSchemaType };
