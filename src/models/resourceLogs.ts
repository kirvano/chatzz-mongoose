import mongoose from "mongoose";

const ResourceLogsSchema = new mongoose.Schema(
  {
    resourceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    code: { type: String, default: "", required: true },
    payload: { type: String, default: "", required: true },
    type: {
      type: String,
      enum: ["error", "info", "reprocessed"],
      default: "info",
      required: true,
    },
  },
  { timestamps: true }
);

type ResourceLogsSchemaType = mongoose.InferSchemaType<
  typeof ResourceLogsSchema
>;

const ResourceLogs = mongoose.model("ResourceLogs", ResourceLogsSchema);

export { ResourceLogsSchema, ResourceLogs, ResourceLogsSchemaType };
