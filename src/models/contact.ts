import mongoose from "mongoose";

const ContactAutomationSchema = new mongoose.Schema({
  paused: {
    type: Boolean,
    default: false,
  },
  pausedForMs: {
    type: Number,
    default: null,
  },
  pausedTill: {
    type: Date,
    default: null,
  },
});

const ContactSchema = new mongoose.Schema(
  {
    automation: ContactAutomationSchema,
    workspaceId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    jid: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    email: {
      type: String,
    },
    leadValue: {
      type: Number,
      default: 0,
    },
    leadOrigin: {
      type: String,
      default: "",
    },
    tags: [
      {
        _id: { type: String },
      },
    ],
    campaigns: [
      {
        _id: { type: String },
      },
    ],
    fields: [
      {
        _id: { type: String, default: "" },
        value: {
          type: String,
          default: "",
        },
      },
    ],
    funnelStep: { type: mongoose.Schema.Types.ObjectId },
    funnelStepDate: { type: Date },
    actions: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        isCompleted: { type: Boolean, default: false, required: true },
      },
    ],
    onWhatsapp: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    verifiedAt: { type: Date },
  },
  { timestamps: true }
);

type ContactSchemaType = mongoose.InferSchemaType<typeof ContactSchema>;

const Contact = mongoose.model("Contact", ContactSchema);

export { ContactSchema, Contact, ContactSchemaType };
