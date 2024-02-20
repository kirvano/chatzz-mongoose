import mongoose from "mongoose";

const LogsSchema = new mongoose.Schema({
  level: {
    type: String,
  },
  message: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  meta: {
    user: {
      type: String,
    },
    err: {
      type: String,
    },
  },
});

export const Logs = mongoose.model("Logs", LogsSchema);
