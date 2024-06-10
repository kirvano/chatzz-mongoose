"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformLogs =
  exports.PlatformsSchema =
  exports.Platform =
  exports.LabelConfigs =
  exports.FlowLogsSchema =
  exports.FlowLogs =
  exports.AwaitingResponse =
  exports.BusinessGroupSchema =
  exports.BusinessGroup =
  exports.ChatMessage =
  exports.ContactAnnotationSchema =
  exports.ContactAnnotation =
  exports.ContactSchema =
  exports.Contact =
  exports.CouponSchema =
  exports.Coupon =
  exports.FlowEvent =
  exports.FunnelSalesSchema =
  exports.FunnelSales =
  exports.GroupSchema =
  exports.Group =
  exports.IntegrationSchema =
  exports.Integration =
  exports.IntegrationLogsSchema =
  exports.IntegrationLogs =
  exports.LiveChat =
  exports.Logs =
  exports.LeadHistorySchema =
  exports.LeadHistory =
  exports.MacroGroupSchema =
  exports.MacroGroup =
  exports.MacroSchema =
  exports.Macro =
  exports.MessageScheduleSchema =
  exports.MessageSchedule =
  exports.Notification =
  exports.Plan =
  exports.QuestionnaireSchema =
  exports.Questionnaire =
  exports.QuestionSchema =
  exports.AnswerSchema =
  exports.Transmission =
  exports.TransmissionControlSchema =
  exports.TransmissionControl =
  exports.ContactActionSchema =
  exports.ContactAction =
  exports.User =
  exports.WorkspaceConfig =
  exports.Workspace =
  exports.mongoose =
    void 0;
exports.PlatformLogsSchema = void 0;
var mongoose_1 = require("mongoose");
Object.defineProperty(exports, "mongoose", {
  enumerable: true,
  get: function () {
    return __importDefault(mongoose_1).default;
  },
});
var workspace_1 = require("./models/workspace");
Object.defineProperty(exports, "Workspace", {
  enumerable: true,
  get: function () {
    return workspace_1.Workspace;
  },
});
var workspaceConfig_1 = require("./models/workspaceConfig");
Object.defineProperty(exports, "WorkspaceConfig", {
  enumerable: true,
  get: function () {
    return workspaceConfig_1.WorkspaceConfig;
  },
});
var user_1 = require("./models/user");
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return user_1.User;
  },
});
var contactAction_1 = require("./models/contactAction");
Object.defineProperty(exports, "ContactAction", {
  enumerable: true,
  get: function () {
    return contactAction_1.ContactAction;
  },
});
Object.defineProperty(exports, "ContactActionSchema", {
  enumerable: true,
  get: function () {
    return contactAction_1.ContactActionSchema;
  },
});
var transmissionControl_1 = require("./models/transmissionControl");
Object.defineProperty(exports, "TransmissionControl", {
  enumerable: true,
  get: function () {
    return transmissionControl_1.TransmissionControl;
  },
});
Object.defineProperty(exports, "TransmissionControlSchema", {
  enumerable: true,
  get: function () {
    return transmissionControl_1.TransmissionControlSchema;
  },
});
var transmission_1 = require("./models/transmission");
Object.defineProperty(exports, "Transmission", {
  enumerable: true,
  get: function () {
    return transmission_1.Transmission;
  },
});
var questionnaire_1 = require("./models/questionnaire");
Object.defineProperty(exports, "AnswerSchema", {
  enumerable: true,
  get: function () {
    return questionnaire_1.AnswerSchema;
  },
});
Object.defineProperty(exports, "QuestionSchema", {
  enumerable: true,
  get: function () {
    return questionnaire_1.QuestionSchema;
  },
});
Object.defineProperty(exports, "Questionnaire", {
  enumerable: true,
  get: function () {
    return questionnaire_1.Questionnaire;
  },
});
Object.defineProperty(exports, "QuestionnaireSchema", {
  enumerable: true,
  get: function () {
    return questionnaire_1.QuestionnaireSchema;
  },
});
var plan_1 = require("./models/plan");
Object.defineProperty(exports, "Plan", {
  enumerable: true,
  get: function () {
    return plan_1.Plan;
  },
});
var notification_1 = require("./models/notification");
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return notification_1.Notification;
  },
});
var messageSchedule_1 = require("./models/messageSchedule");
Object.defineProperty(exports, "MessageSchedule", {
  enumerable: true,
  get: function () {
    return messageSchedule_1.MessageSchedule;
  },
});
Object.defineProperty(exports, "MessageScheduleSchema", {
  enumerable: true,
  get: function () {
    return messageSchedule_1.MessageScheduleSchema;
  },
});
var macro_1 = require("./models/macro");
Object.defineProperty(exports, "Macro", {
  enumerable: true,
  get: function () {
    return macro_1.Macro;
  },
});
Object.defineProperty(exports, "MacroSchema", {
  enumerable: true,
  get: function () {
    return macro_1.MacroSchema;
  },
});
var macroGroup_1 = require("./models/macroGroup");
Object.defineProperty(exports, "MacroGroup", {
  enumerable: true,
  get: function () {
    return macroGroup_1.MacroGroup;
  },
});
Object.defineProperty(exports, "MacroGroupSchema", {
  enumerable: true,
  get: function () {
    return macroGroup_1.MacroGroupSchema;
  },
});
var leadHistory_1 = require("./models/leadHistory");
Object.defineProperty(exports, "LeadHistory", {
  enumerable: true,
  get: function () {
    return leadHistory_1.LeadHistory;
  },
});
Object.defineProperty(exports, "LeadHistorySchema", {
  enumerable: true,
  get: function () {
    return leadHistory_1.LeadHistorySchema;
  },
});
var logs_1 = require("./models/logs");
Object.defineProperty(exports, "Logs", {
  enumerable: true,
  get: function () {
    return logs_1.Logs;
  },
});
var livechat_1 = require("./models/livechat");
Object.defineProperty(exports, "LiveChat", {
  enumerable: true,
  get: function () {
    return livechat_1.LiveChat;
  },
});
var integrationLogs_1 = require("./models/integrationLogs");
Object.defineProperty(exports, "IntegrationLogs", {
  enumerable: true,
  get: function () {
    return integrationLogs_1.IntegrationLogs;
  },
});
Object.defineProperty(exports, "IntegrationLogsSchema", {
  enumerable: true,
  get: function () {
    return integrationLogs_1.IntegrationLogsSchema;
  },
});
var integration_1 = require("./models/integration");
Object.defineProperty(exports, "Integration", {
  enumerable: true,
  get: function () {
    return integration_1.Integration;
  },
});
Object.defineProperty(exports, "IntegrationSchema", {
  enumerable: true,
  get: function () {
    return integration_1.IntegrationSchema;
  },
});
var group_1 = require("./models/group");
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function () {
    return group_1.Group;
  },
});
Object.defineProperty(exports, "GroupSchema", {
  enumerable: true,
  get: function () {
    return group_1.GroupSchema;
  },
});
var funnelSales_1 = require("./models/funnelSales");
Object.defineProperty(exports, "FunnelSales", {
  enumerable: true,
  get: function () {
    return funnelSales_1.FunnelSales;
  },
});
Object.defineProperty(exports, "FunnelSalesSchema", {
  enumerable: true,
  get: function () {
    return funnelSales_1.FunnelSalesSchema;
  },
});
var FlowEvent_1 = require("./models/FlowEvent");
Object.defineProperty(exports, "FlowEvent", {
  enumerable: true,
  get: function () {
    return FlowEvent_1.FlowEvent;
  },
});
var coupon_1 = require("./models/coupon");
Object.defineProperty(exports, "Coupon", {
  enumerable: true,
  get: function () {
    return coupon_1.Coupon;
  },
});
Object.defineProperty(exports, "CouponSchema", {
  enumerable: true,
  get: function () {
    return coupon_1.CouponSchema;
  },
});
var contact_1 = require("./models/contact");
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return contact_1.Contact;
  },
});
Object.defineProperty(exports, "ContactSchema", {
  enumerable: true,
  get: function () {
    return contact_1.ContactSchema;
  },
});
var contactAnnotation_1 = require("./models/contactAnnotation");
Object.defineProperty(exports, "ContactAnnotation", {
  enumerable: true,
  get: function () {
    return contactAnnotation_1.ContactAnnotation;
  },
});
Object.defineProperty(exports, "ContactAnnotationSchema", {
  enumerable: true,
  get: function () {
    return contactAnnotation_1.ContactAnnotationSchema;
  },
});
var chatmessage_1 = require("./models/chatmessage");
Object.defineProperty(exports, "ChatMessage", {
  enumerable: true,
  get: function () {
    return chatmessage_1.ChatMessage;
  },
});
var businessGroup_1 = require("./models/businessGroup");
Object.defineProperty(exports, "BusinessGroup", {
  enumerable: true,
  get: function () {
    return businessGroup_1.BusinessGroup;
  },
});
Object.defineProperty(exports, "BusinessGroupSchema", {
  enumerable: true,
  get: function () {
    return businessGroup_1.BusinessGroupSchema;
  },
});
var AwaitingResponse_1 = require("./models/AwaitingResponse");
Object.defineProperty(exports, "AwaitingResponse", {
  enumerable: true,
  get: function () {
    return AwaitingResponse_1.AwaitingResponse;
  },
});
var flowLogs_1 = require("./models/flowLogs");
Object.defineProperty(exports, "FlowLogs", {
  enumerable: true,
  get: function () {
    return flowLogs_1.FlowLogs;
  },
});
Object.defineProperty(exports, "FlowLogsSchema", {
  enumerable: true,
  get: function () {
    return flowLogs_1.FlowLogsSchema;
  },
});
var labelConfigs_1 = require("./models/labelConfigs");
Object.defineProperty(exports, "LabelConfigs", {
  enumerable: true,
  get: function () {
    return labelConfigs_1.LabelConfigs;
  },
});
var platforms_1 = require("./models/platforms");
Object.defineProperty(exports, "Platform", {
  enumerable: true,
  get: function () {
    return platforms_1.Platform;
  },
});
Object.defineProperty(exports, "PlatformsSchema", {
  enumerable: true,
  get: function () {
    return platforms_1.PlatformsSchema;
  },
});
var platformsLogs_1 = require("./models/platformsLogs");
Object.defineProperty(exports, "PlatformLogs", {
  enumerable: true,
  get: function () {
    return platformsLogs_1.PlatformLogs;
  },
});
Object.defineProperty(exports, "PlatformLogsSchema", {
  enumerable: true,
  get: function () {
    return platformsLogs_1.PlatformLogsSchema;
  },
});
var resource_1 = require("./models/resource");
Object.defineProperty(exports, "Resource", {
  enumerable: true,
  get: function () {
    return resource_1.Resource;
  },
});
Object.defineProperty(exports, "ResourceSchema", {
  enumerable: true,
  get: function () {
    return resource_1.ResourceSchema;
  },
});
var resourceLogs_1 = require("./models/resourceLogs");
Object.defineProperty(exports, "ResourceLogs", {
  enumerable: true,
  get: function () {
    return resourceLogs_1.ResourceLogs;
  },
});
Object.defineProperty(exports, "ResourceLogsSchema", {
  enumerable: true,
  get: function () {
    return resourceLogs_1.ResourceLogsSchema;
  },
});
