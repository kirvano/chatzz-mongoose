import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  data: { type: mongoose.Schema.Types.Mixed },
});

const ContactLogSchema = new mongoose.Schema({
  phone: { type: String },
  name: { type: String },
  message: { type: String },
});

const ContactsImportSchema = new mongoose.Schema(
  {
    workspaceId: { type: mongoose.Schema.Types.ObjectId },
    status: { type: String, enum: ["finished", "pending"], default: "pending" },
    contacts: [ContactSchema],
    total: { type: Number },
    errors: [ContactLogSchema],
  },
  { timestamps: true }
);

type ContactImportSchemaType = mongoose.InferSchemaType<
  typeof ContactsImportSchema
>;

const ContactsImport = mongoose.model("ContactsImport", ContactsImportSchema);

export { ContactsImportSchema, ContactImportSchemaType, ContactsImport };
