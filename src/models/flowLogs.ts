import mongoose from "mongoose";

const FlowLogsSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId },
    flowId: { type: mongoose.Schema.Types.ObjectId },
    stepId: { type: mongoose.Schema.Types.ObjectId },
    code: { type: String },
    message: { type: String, required: true },
    stack: { type: String },
  },
  { timestamps: true }
);

type FlowLogsSchemaType = mongoose.InferSchemaType<typeof FlowLogsSchema>;

const FlowLogs = mongoose.model("FlowLogs", FlowLogsSchema);

export { FlowLogsSchema, FlowLogs, FlowLogsSchemaType };
