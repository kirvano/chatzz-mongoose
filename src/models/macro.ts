import mongoose from "mongoose";

const MacroSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["text", "image", "video", "audio", "document", "script"],
      required: true,
    },
    availability: {
      condition: {
        type: String,
        enum: ["public", "private"],
        default: "public",
      },
      users: [mongoose.Schema.Types.ObjectId],
    },
    groupId: { type: mongoose.Schema.Types.ObjectId, default: null },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

type MacroSchemaType = mongoose.InferSchemaType<typeof MacroSchema>;

const Macro = mongoose.model("Macro", MacroSchema);

export { MacroSchema, Macro, MacroSchemaType };
