const mongoose = require("mongoose");

const TransmissionControlSchema = new mongoose.Schema(
  {
    workspaceId: {
      type: String,
      required: true,
    },
    trasmissionId: {
      type: String,
      required: true,
    },
    flowId: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TransmissionControl = mongoose.model(
  "TransmissionControl",
  TransmissionControlSchema
);

module.exports = {
  TransmissionControlSchema,
  TransmissionControl,
};
