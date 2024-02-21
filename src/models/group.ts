import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema(
  {
    jid: { type: String, required: true },
    role: { type: String, enum: ["admin", "superadmin", "member"] },
  },
  { timestamps: true }
);

const GroupSchema = new mongoose.Schema(
  {
    jid: { type: String, required: true },
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ownerJid: { type: String, rdatequired: true },
    description: { type: String },
    restrict: { type: Boolean, required: true },
    announce: { type: Boolean, required: true },
    participants: [ParticipantSchema],
    authorJid: { type: String, required: true },
  },
  { timestamps: true }
);

type GroupSchemaType = mongoose.InferSchemaType<typeof GroupSchema>;

const Group = mongoose.model("Group", GroupSchema);

export { GroupSchema, Group, GroupSchemaType };
