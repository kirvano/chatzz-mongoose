import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["workspace_invite"], required: true },
    data: mongoose.Schema.Types.Mixed,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export type NotificationSchemaType = mongoose.InferSchemaType<
  typeof NotificationSchema
>;

export const Notification = mongoose.model("Notification", NotificationSchema);
