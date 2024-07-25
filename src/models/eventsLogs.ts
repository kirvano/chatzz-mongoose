import mongoose from "mongoose";

const EventsLogsSchema = new mongoose.Schema({
  instance: { type: String },
  message: { type: String, required: true },
  stack: { type: String },
  level: { type: String, required: true },
  data: { type: String },
  queue: { type: String },
  createdAt: { type: Date, default: Date.now, expires: "7d" },
});

type EventsLogsSchemaType = mongoose.InferSchemaType<typeof EventsLogsSchema>;

const EventsLogs = mongoose.model("EventsLogs", EventsLogsSchema);

export { EventsLogsSchema, EventsLogs, EventsLogsSchemaType };
