/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export { default as mongoose } from "mongoose";
export { Workspace, WorkspaceSchemaType } from "./models/workspace";
export { WorkspaceConfig, WorkspaceConfigSchemaType, } from "./models/workspaceConfig";
export { User, UserSchemaType } from "./models/user";
export { ContactAction, ContactActionSchemaType, ContactActionSchema, } from "./models/contactAction";
export { TransmissionControl, TransmissionControlSchema, TransmissionControlSchemaType, } from "./models/transmissionControl";
export { Transmission } from "./models/transmission";
export { AnswerSchema, QuestionSchema, Questionnaire, QuestionnaireSchema, QuestionnaireSchemaType, } from "./models/questionnaire";
export { Plan, PlanSchemaType } from "./models/plan";
export { Notification, NotificationSchemaType } from "./models/notification";
export { MessageSchedule, MessageScheduleSchema, MessageScheduleSchemaType, } from "./models/messageSchedule";
export { Macro, MacroSchema, MacroSchemaType } from "./models/macro";
export { MacroGroup, MacroGroupSchema, MacroGroupSchemaType, } from "./models/macroGroup";
export { LeadHistory, LeadHistorySchema, LeadHistorySchemaType, } from "./models/leadHistory";
export { Logs, LogsSchemaType } from "./models/logs";
export { LiveChat, ChatSchemaType } from "./models/livechat";
export { IntegrationLogs, IntegrationLogsSchema, IntegrationLogsSchemaType, } from "./models/integrationLogs";
export { Integration, IntegrationSchema, IntegrationSchemaType, } from "./models/integration";
export { Group, GroupSchema, GroupSchemaType } from "./models/group";
export { FunnelSales, FunnelSalesSchema, FunnelSalesSchemaType, } from "./models/funnelSales";
export { FlowEvent, FlowEventsSchemaType } from "./models/FlowEvent";
export { Coupon, CouponSchema, CouponSchemaType } from "./models/coupon";
export { Contact, ContactSchema, ContactSchemaType } from "./models/contact";
export { ContactAnnotation, ContactAnnotationSchema, ContactAnnotationSchemaType, } from "./models/contactAnnotation";
export { ChatMessage, MessageSchemaType } from "./models/chatmessage";
export { BusinessGroup, BusinessGroupSchema, BusinessGroupSchemaType, } from "./models/businessGroup";
export { AwaitingResponse, AwaitingResponseSchemaType, } from "./models/AwaitingResponse";
export { FlowLogs, FlowLogsSchema, FlowLogsSchemaType, } from "./models/flowLogs";
export { LabelConfigs, LabelConfigsSchemaType } from "./models/labelConfigs";
export { Platform, PlatformsSchema, PlatformsSchemaType, } from "./models/platforms";
export { PlatformLogs, PlatformLogsSchema, PlatformLogsSchemaType, } from "./models/platformsLogs";
export { Resource, ResourceSchema, ResourceSchemaType, } from "./models/resource";
export { ResourceLogs, ResourceLogsSchema, ResourceLogsSchemaType, } from "./models/resourceLogs";
export { ContactImportSchemaType, ContactsImport, ContactsImportSchema, } from "./models/contactsImport";
