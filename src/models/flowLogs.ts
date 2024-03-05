import mongoose from "mongoose";

const FlowLogsSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId },
    flowId: { type: mongoose.Schema.Types.ObjectId },
    stepId: { type: mongoose.Schema.Types.ObjectId },
    jid: { type: String },
    code: { type: String },
    message: { type: String, required: true },
    stack: { type: String },
    payload: { type: String },
  },
  { timestamps: true }
);

type FlowLogsSchemaType = mongoose.InferSchemaType<typeof FlowLogsSchema>;

const FlowLogs = mongoose.model("FlowLogs", FlowLogsSchema);

export { FlowLogsSchema, FlowLogs, FlowLogsSchemaType };
