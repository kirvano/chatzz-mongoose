import mongoose from "mongoose";

export const ContactActionSchema = new mongoose.Schema(
    {
        workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
        action: {
            title: { type: String, maxlength: 20, required: true },
            description: { type: String, maxlength: 500, default: "" },
            icon: { type: String, required: true },
            day: { type: Number, required: true },
        },
        stepId: { type: mongoose.Schema.Types.ObjectId, required: true },
        isDefault: { type: Boolean, default: false },
        author: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    { timestamps: true }
);

export type ContactActionSchemaType = mongoose.InferSchemaType<
    typeof ContactActionSchema
>;

export const ContactAction = mongoose.model("ContactAction", ContactActionSchema);