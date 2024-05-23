import mongoose from "mongoose";

export const ContactAnnotationSchema = new mongoose.Schema(
    {
        workspaceId: { type: mongoose.Schema.Types.ObjectId, required: true },
        contactId: { type: mongoose.Schema.Types.ObjectId, required: true },
        text: { type: String, required: true },
        author: {
            name: { type: String, required: true },
            _id: { type: mongoose.Schema.Types.ObjectId, required: true }
        },
    },
    { timestamps: true }
);

export type ContactAnnotationSchemaType = mongoose.InferSchemaType<
    typeof ContactAnnotationSchema
>;

export const ContactAnnotation = mongoose.model("ContactAnnotation", ContactAnnotationSchema);