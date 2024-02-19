const mongoose = require("mongoose");

const MessageScheduleSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    contactId: { type: mongoose.Schema.Types.ObjectId },
    groupId: { type: mongoose.Schema.Types.ObjectId },
    jobId: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
    type: { type: String, enum: ["text", "macro"], required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

const MessageSchedule = new mongoose.model(
  "MessageSchedule",
  MessageScheduleSchema
);

module.exports = {
  MessageScheduleSchema,
  MessageSchedule,
};
