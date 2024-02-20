const mongoose = require("mongoose");

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
        _id: { type: String },
        value: {
          type: String,
          default: "",
        },
      },
    ],
    funnelStep: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = {
  ContactSchema,
  Contact,
};
