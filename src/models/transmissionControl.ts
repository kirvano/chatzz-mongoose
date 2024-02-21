import mongoose from "mongoose";

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

type TransmissionControlSchemaType = mongoose.InferSchemaType<
  typeof TransmissionControlSchema
>;

const TransmissionControl = mongoose.model(
  "TransmissionControl",
  TransmissionControlSchema
);

export {
  TransmissionControlSchema,
  TransmissionControl,
  TransmissionControlSchemaType,
};
