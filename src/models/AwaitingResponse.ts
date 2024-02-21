import mongoose from "mongoose";

const AwaitingResponseSchema = new mongoose.Schema(
  {
    workspaceId: {
      type: String,
    },
    flowId: {
      type: String,
    },
    jid: {
      type: String,
    },
    options: {
      type: [mongoose.Schema.Types.Mixed],
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
    nextStep: {
      type: Object,
    },
    step: {
      type: Object,
    },
    attempted: {
      type: Number,
    },
    idTimesUpJobDispatch: {
      type: String,
    },
    shouldIgnoreResponse: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export type AwaitingResponseSchemaType = mongoose.InferSchemaType<
  typeof AwaitingResponseSchema
>;

export const AwaitingResponse = mongoose.model(
  "AwaitingResponse",
  AwaitingResponseSchema
);
