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
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const Macro = mongoose.model("Macro", MacroSchema);

export { MacroSchema, Macro };
