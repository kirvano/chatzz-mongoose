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
    helpIconFloatShow: { type: Boolean, default: true },
    disableUserRegistration: { type: Boolean, default: false },
    disable: { type: Boolean, default: true },
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
    theme: {
      primary: {
        brand: {
          solid: {
            500: { type: String, default: "#2e8a43" },
            450: { type: String, default: "#2e9947" },
            400: { type: String, default: "#32a94e" },
            350: { type: String, default: "#40b05a" },
            300: { type: String, default: "#36ba55" },
            200: { type: String, default: "#74d88b" },
            100: { type: String, default: "#baedc6" },
            50: { type: String, default: "#f0faf2" },
          },
          alpha: {
            90: { type: String, default: "rgba(54, 191, 86, 0.2)" },
            60: { type: String, default: "rgba(54, 191, 86, 0.14)" },
            30: { type: String, default: "rgba(54, 191, 86, 0.08)" },
          },
        },
      },
    },
  },
  { timestamps: true }
);

export type LabelConfigsSchemaType = mongoose.InferSchemaType<
  typeof LabelConfigsSchema
>;

export const LabelConfigs = mongoose.model("LabelConfigs", LabelConfigsSchema);
