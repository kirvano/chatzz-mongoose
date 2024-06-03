import mongoose from "mongoose";

export const LeadHistorySchema = new mongoose.Schema(
  {
    contactId: { type: mongoose.Schema.Types.ObjectId, required: true },
    action: {
      type: {
        type: String,
        enum: ["status_update", "attendant_update", "contact_action_update", 'crm_update'],
        required: true,
      },
      data: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
    author: {
      name: { type: String, required: true },
      _id: { type: mongoose.Schema.Types.ObjectId },
    },
  },
  { timestamps: true }
);

export type LeadHistorySchemaType = mongoose.InferSchemaType<
  typeof LeadHistorySchema
>;

export const LeadHistory = mongoose.model("LeadHistory", LeadHistorySchema);
