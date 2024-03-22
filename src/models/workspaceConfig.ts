import mongoose from "mongoose";

const WorkspaceConfigSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    apiUrl: { type: String, default: "" },
    secretApi: { type: String, default: "" },
  },
  { timestamps: true }
);

export type WorkspaceConfigSchemaType = mongoose.InferSchemaType<
  typeof WorkspaceConfigSchema
>;

export const WorkspaceConfig = mongoose.model(
  "WorkspaceConfig",
  WorkspaceConfigSchema
);
