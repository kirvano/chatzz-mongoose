import mongoose from "mongoose";

const MacroGroupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 20 },
    color: {
      name: { type: String, required: true },
      hex: { type: String, required: true },
    },
    workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedBy: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

type MacroGroupSchemaType = mongoose.InferSchemaType<typeof MacroGroupSchema>;

const MacroGroup = mongoose.model("MacroGroup", MacroGroupSchema);

export { MacroGroupSchema, MacroGroup, MacroGroupSchemaType };
