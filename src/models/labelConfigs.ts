import mongoose from "mongoose";

const LabelConfigsSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    fullLogo: { type: String, default: "" },
    simplifiedLogo: { type: String, default: "" },
    favicon: { type: String, default: "" },
    loginBanner: { type: String, default: "" },
    helpLink: { type: String, default: "" },
    helpIcon: { type: String, default: "" },
    email: {
      user: { type: String, default: "" },
      password: { type: String, default: "" },
      host: { type: String, default: "" },
      port: { type: String, default: "" },
    },
    domain: {
      host: { type: String, default: "" },
      id: { type: String, default: "" },
      txtName: { type: String, default: "" },
      txtValue: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export type LabelConfigsSchemaType = mongoose.InferSchemaType<
  typeof LabelConfigsSchema
>;

export const LabelConfigs = mongoose.model("LabelConfigs", LabelConfigsSchema);
