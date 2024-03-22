import mongoose from "mongoose";

const WorkspaceInputFlowSchema = new mongoose.Schema(
  {
    welcome: {
      chatbotId: { type: mongoose.Schema.Types.ObjectId },
      execution: {
        type: Number,
        default: 0,
      },
    },
    main: {
      chatbotId: { type: mongoose.Schema.Types.ObjectId },
      execution: {
        type: Number,
        default: 0,
      },
      waitUntil: { type: Number, default: 0 },
    },
    afk: {
      chatbotId: { type: mongoose.Schema.Types.ObjectId },
      waitUntil: { type: Number, default: 0 },
      execution: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

const WorkspaceMemberPrivacySchema = new mongoose.Schema(
  {
    allMessages: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const WorkspaceMemberSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    allowedPaths: [String],
    privacy: WorkspaceMemberPrivacySchema,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const ChargePlanSchema = new mongoose.Schema(
  {
    id: { type: String },
    amount: { type: Number },
    amount_capturable: { type: Number },
    amount_received: { type: Number },
    paidAt: { type: Date },
    status: {
      // status da stripe
      type: String,
      enum: [
        "requires_payment_method",
        "requires_confirmation",
        "requires_action",
        "processing",
        "requires_capture",
        "canceled",
        "succeeded",
      ],
    },
  },
  { timestamps: true }
);

const HistoryChangePlanSchema = new mongoose.Schema(
  {
    planId: { type: mongoose.Schema.Types.ObjectId },
    dateToUpdate: { type: Date },
    userId: { type: mongoose.Schema.Types.ObjectId },
    isUpdated: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const AppliedCouponsSchema = new mongoose.Schema({
  code: { type: String, required: true },
  remainingUses: { type: Number, required: true },
});

const WorkspacePlanSchema = new mongoose.Schema(
  {
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
    appliedCoupons: [AppliedCouponsSchema],
    paymentMethodId: { type: String },
    subscribedAt: { type: Date },
    lastChargeDate: { type: Date },
    nextChargeDate: { type: Date },
    charges: [ChargePlanSchema],
    historyChanges: [HistoryChangePlanSchema],
  },
  { timestamps: true }
);

const WorkspaceSequenceSchema = new mongoose.Schema(
  {
    name: { type: String },
    flow: [
      {
        flowName: { type: String },
        status: { type: Boolean, default: false },
        time: { type: Object },
      },
    ],
  },
  { timestamps: true }
);

const WorkspaceTransmissionSchema = new mongoose.Schema(
  {
    flowId: { type: String },
    schedulingId: {
      type: String,
      default: "",
    },
    name: { type: String },
    delay: { type: String, default: "1" },
    status: {
      type: String,
      enum: ["executing", "paused", "stopped"],
      default: "stopped",
    },
    remainingPhoneList: { type: [String] },
    phoneList: [
      {
        phoneNumber: { type: String },
        sent: {
          type: Boolean,
          default: false,
        },
        error: { type: String },
      },
    ],
    isScheduled: {
      type: Boolean,
      default: false,
    },
    executionTime: {
      start: { type: String, default: "00:00" },
      end: { type: String, default: "23:59" },
    },
    daysOfWeek: {
      type: [String],
      default: ["0", "1", "2", "3", "4", "5", "6"],
    },
    scheduledDateTime: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const WorkspaceKeywordSchema = new mongoose.Schema(
  {
    situation: { type: Boolean },
    condition: { type: String },
    keyword: { type: String },
    conversationflow: { type: String },
    execution: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const WorkspaceFlowSchema = new mongoose.Schema(
  {
    name: { type: String },
    execution: {
      type: Number,
      default: 0,
    },
    ctr: {
      type: Number,
      default: 0,
    },
    flow: [
      {
        edges: [mongoose.Schema.Types.Mixed],
        nodes: [mongoose.Schema.Types.Mixed],
        viewport: mongoose.Schema.Types.Mixed,
        flowSteps: [mongoose.Schema.Types.Mixed],
      },
    ],
  },
  { timestamps: true }
);

const WorkspaceFolderFlowSchema = new mongoose.Schema(
  {
    folderName: { type: String, require: true },
    flowList: [WorkspaceFlowSchema],
  },
  { timestamps: true }
);

const WorkspaceCustomFieldSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const WorkspaceFastReplySchema = new mongoose.Schema(
  {
    name: { type: String },
    reply: { type: String },
  },
  { timestamps: true }
);

const WorkspaceTagSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const WorkspaceCampaingSchema = new mongoose.Schema(
  {
    name: { type: String },
    message: { type: String },
    flow: { type: String },
    execution: {
      type: Number,
      default: 0,
    },
    ctr: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const WorkspaceOpenHoursSchema = new mongoose.Schema(
  {
    weekDay: {
      type: String,
      enum: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
    },
    isOpen: { type: Boolean, default: true },
    startHour: { type: Date },
    endHour: { type: Date },
  },
  { timestamps: true }
);

const WorkspaceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stripeCustomerId: { type: String }, // idCliente na Stripe
    instance: { type: String }, // idSession:userId
    document: { type: String }, // CPF ou CNPJ
    email: { type: String },
    jid: { type: String },
    name: { type: String },
    phoneNumber: { type: String },
    picture: { type: String },
    status: {
      type: String,
      enum: [
        "active",
        "inactive", //quando o admin inativa o workspace
        "canceled",
        "requires_plan",
        "awaiting_payment",
        "in_cancellation",
        "free_trial",
        "expired", //venceu o pagamento
        "blocked", //após tres dias de vencimento
      ],
      required: true,
    },
    endsTrial: { type: Date },
    canceledAt: { type: Date },
    members: [WorkspaceMemberSchema],
    plan: WorkspacePlanSchema,
    sequenceList: [WorkspaceSequenceSchema],
    transmissionsList: [WorkspaceTransmissionSchema],
    keywordsList: [WorkspaceKeywordSchema],
    folderList: [WorkspaceFolderFlowSchema],
    customFields: [WorkspaceCustomFieldSchema],
    fastReplies: [WorkspaceFastReplySchema],
    tags: [WorkspaceTagSchema],
    campaigns: [WorkspaceCampaingSchema],
    openHours: [WorkspaceOpenHoursSchema],
    inputFlow: WorkspaceInputFlowSchema,
  },
  { timestamps: true }
);

export type WorkspaceSchemaType = mongoose.InferSchemaType<
  typeof WorkspaceSchema
>;

export const Workspace = mongoose.model("Workspace", WorkspaceSchema);
