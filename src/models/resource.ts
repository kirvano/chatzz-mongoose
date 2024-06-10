import mongoose from "mongoose";

const ResourceMappingFieldsSchema = new mongoose.Schema({
  name: { type: String },
  identification: { type: String },
  value: { type: String },
});

const ResourceMappingEventsSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  identification: { type: String },
  action: { type: String },
});

const ResourceMappingSchema = new mongoose.Schema(
  {
    receivedData: { type: String },
    fields: [ResourceMappingFieldsSchema],
    events: [ResourceMappingEventsSchema],
  },
  { timestamps: true }
);

const ResourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    active: { type: Boolean, default: true },
    type: {
      type: String,
      required: true,
      enum: ["attendant", "whatsapp", "webhook", "transmission"],
    },
    resourceType: {
      type: String,
      required: true,
      enum: ["recharge", "subscription"],
    },
    chargeType: {
      type: String,
      required: true,
      enum: ["internal", "external"],
    },
    quantity: { type: Number, default: 0 },
    externalURL: { type: String },
    price: { type: Number, required: true },
    frequency: { type: Number },
    mapping: ResourceMappingSchema,
  },
  { timestamps: true }
);

type ResourceSchemaType = mongoose.InferSchemaType<typeof ResourceSchema>;

const Resource = mongoose.model("Resource", ResourceSchema);

export { ResourceSchema, ResourceSchemaType, Resource };
