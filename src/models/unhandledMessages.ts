import mongoose from "mongoose";

const UnhandledMessagesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  payload: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "7d" },
});

type UnhandledMessagesSchemaType = mongoose.InferSchemaType<
  typeof UnhandledMessagesSchema
>;

const UnhandledMessages = mongoose.model(
  "UnhandledMessages",
  UnhandledMessagesSchema
);

export {
  UnhandledMessagesSchema,
  UnhandledMessages,
  UnhandledMessagesSchemaType,
};
