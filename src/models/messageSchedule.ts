import mongoose from "mongoose";

const MessageScheduleSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    contactId: { type: mongoose.Schema.Types.ObjectId },
    groupId: { type: mongoose.Schema.Types.ObjectId },
    jobId: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
    type: { type: String, enum: ["text", "macro", "chatbot"], required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

type MessageScheduleSchemaType = mongoose.InferSchemaType<
  typeof MessageScheduleSchema
>;

const MessageSchedule = mongoose.model(
  "MessageSchedule",
  MessageScheduleSchema
);

export { MessageScheduleSchema, MessageSchedule, MessageScheduleSchemaType };
