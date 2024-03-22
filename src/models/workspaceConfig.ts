import mongoose from "mongoose";

const WorkspaceConfigSchema = new mongoose.Schema(
  {
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    apiUrl: { type: String, default: "" },
    apiSecret: { type: String, default: "" },
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
