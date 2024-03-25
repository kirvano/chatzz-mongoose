import mongoose from "mongoose";

const LabelConfigsSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    fullLogo: { type: String },
    simplifiedLogo: { type: String },
    favicon: { type: String },
    loginBanner: { type: String },
    helpLink: { type: String },
    email: {
      user: { type: String },
      password: { type: String },
      host: { type: String },
      port: { type: String },
    },
    domain: {
      host: { type: String },
    },
  },
  { timestamps: true }
);

export type LabelConfigsSchemaType = mongoose.InferSchemaType<
  typeof LabelConfigsSchema
>;

export const LabelConfigs = mongoose.model("LabelConfigs", LabelConfigsSchema);
