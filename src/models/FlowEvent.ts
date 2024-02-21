import mongoose from "mongoose";

const FlowEventsSchema = new mongoose.Schema(
  {
    flowId: {
      type: String,
    },
    jid: {
      type: String,
    },
    stepId: {
      type: String,
    },
    isAwaitingResponse: {
      type: Boolean,
      default: false,
    },
    baileysResponse: {
      type: Object,
    },
    sent: {
      type: Object,
    },
    variable: {
      type: String,
      default: null,
    },
    value: {
      type: Object,
      default: null,
    },
    waitUntil: {
      type: Date,
      default: null,
    },
    attempts: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export type FlowEventsSchemaType = mongoose.InferSchemaType<
  typeof FlowEventsSchema
>;

export const FlowEvent = mongoose.model("FlowEvent", FlowEventsSchema);
