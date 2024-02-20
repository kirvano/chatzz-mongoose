"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WorkspaceInputFlowSchema = new mongoose_1.default.Schema({
    welcome: {
        chatbotId: { type: mongoose_1.default.Schema.Types.ObjectId },
        execution: {
            type: Number,
            default: 0,
        },
    },
    main: {
        chatbotId: { type: mongoose_1.default.Schema.Types.ObjectId },
        execution: {
            type: Number,
            default: 0,
        },
        waitUntil: { type: Number, default: 0 },
    },
    afk: {
        chatbotId: { type: mongoose_1.default.Schema.Types.ObjectId },
        waitUntil: { type: Number, default: 0 },
        execution: {
            type: Number,
            default: 0,
        },
    },
}, { timestamps: true });
const WorkspaceMemberSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    allowedPaths: [String],
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
}, { timestamps: true });
const ChargePlanSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
const HistoryChangePlanSchema = new mongoose_1.default.Schema({
    planId: { type: mongoose_1.default.Schema.Types.ObjectId },
    dateToUpdate: { type: Date },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId },
    isUpdated: { type: Boolean, default: false },
}, { timestamps: true });
const AppliedCouponsSchema = new mongoose_1.default.Schema({
    code: { type: String, required: true },
    remainingUses: { type: Number, required: true },
});
const WorkspacePlanSchema = new mongoose_1.default.Schema({
    planId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Plan" },
    appliedCoupons: [AppliedCouponsSchema],
    paymentMethodId: { type: String },
    subscribedAt: { type: Date },
    lastChargeDate: { type: Date },
    nextChargeDate: { type: Date },
    charges: [ChargePlanSchema],
    historyChanges: [HistoryChangePlanSchema],
}, { timestamps: true });
const WorkspaceSequenceSchema = new mongoose_1.default.Schema({
    name: { type: String },
    flow: [
        {
            flowName: { type: String },
            status: { type: Boolean, default: false },
            time: { type: Object },
        },
    ],
}, { timestamps: true });
const WorkspaceTransmissionSchema = new mongoose_1.default.Schema({
    flowId: { type: String },
    schedulingId: {
        type: String,
        default: "",
    },
    name: { type: String },
    delay: { type: String, default: "1" },
    phoneList: [
        {
            phoneNumber: { type: String },
            sent: {
                type: Boolean,
                default: false,
            },
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
}, { timestamps: true });
const WorkspaceKeywordSchema = new mongoose_1.default.Schema({
    situation: { type: Boolean },
    condition: { type: String },
    keyword: { type: String },
    conversationflow: { type: String },
    execution: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
const WorkspaceFlowSchema = new mongoose_1.default.Schema({
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
            edges: [mongoose_1.default.Schema.Types.Mixed],
            nodes: [mongoose_1.default.Schema.Types.Mixed],
            viewport: mongoose_1.default.Schema.Types.Mixed,
            flowSteps: [mongoose_1.default.Schema.Types.Mixed],
        },
    ],
}, { timestamps: true });
const WorkspaceFolderFlowSchema = new mongoose_1.default.Schema({
    folderName: { type: String, require: true },
    flowList: [WorkspaceFlowSchema],
}, { timestamps: true });
const WorkspaceCustomFieldSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
}, { timestamps: true });
const WorkspaceFastReplySchema = new mongoose_1.default.Schema({
    name: { type: String },
    reply: { type: String },
}, { timestamps: true });
const WorkspaceTagSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
}, { timestamps: true });
const WorkspaceCampaingSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
const WorkspaceOpenHoursSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
const WorkspaceSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Workspace = mongoose_1.default.model("Workspace", WorkspaceSchema);