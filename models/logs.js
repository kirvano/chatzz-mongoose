const mongoose = require("mongoose");

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

const Logs = mongoose.model("Logs", LogsSchema);

module.exports = Logs;
