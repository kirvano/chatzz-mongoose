import mongoose from "mongoose";

const TransmissionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    phoneNumbers: {
      type: Array,
    },
    name: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export type TransmissionSchemaType = mongoose.InferSchemaType<
  typeof TransmissionSchema
>;

export const Transmission = mongoose.model("Transmission", TransmissionSchema);
