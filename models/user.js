const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    stripeCustomerId: { type: String },
    wallet: [
      {
        paymentMethod: { type: String, required: true },
        isDefault: { type: Boolean, default: false },
        paymentName: { type: String, default: null },
        paymentDocument: { type: String, default: null },
      },
    ],
    active: { type: Boolean, default: false }, // email validado
    blocked: { type: Boolean, default: false }, // bloquear usuário
    email: {
      type: String,
      require: true,
      set: (value) => value.toLowerCase(),
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    logLoginList: [
      {
        createdAt: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          default: "",
        },
      },
    ],
    userAddress: {
      cep: { type: String },
      city: { type: String },
      streetAddress: { type: String },
      neighborhood: { type: String },
      houseNumber: { type: String },
      complement: { type: String },
      country: { type: String },
      state: { type: String },
    },
    businessGroupId: { type: String },
    isLegalEntity: { type: Boolean },
    document: { type: String },
    passwordSetted: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["superadmin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
