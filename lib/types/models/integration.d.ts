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
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
declare const IntegrationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "webhooks";
    active: boolean;
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: mongoose.Types.ObjectId | undefined;
    }[];
    name: string;
    workspaceId: mongoose.Types.ObjectId;
    icon: string;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: "chatbot";
            data?: any;
        }>;
    }>;
    executions: number;
    direction: "input" | "output";
    body: mongoose.Types.DocumentArray<{
        name: string;
        identification: string;
        payloadFieldName: string;
        isCustomField: boolean;
        optional: boolean;
    }>;
    reprocessStatus: "executing" | "stopped" | "stopping";
    reprocessConfigs?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        delay: number;
        order: string;
        interval: number;
        allowedCodes: string[];
    }) | undefined;
    headers?: any;
    externalURL?: string | undefined;
}>;
type IntegrationSchemaType = mongoose.InferSchemaType<typeof IntegrationSchema>;
declare const Integration: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "webhooks";
    active: boolean;
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: mongoose.Types.ObjectId | undefined;
    }[];
    name: string;
    workspaceId: mongoose.Types.ObjectId;
    icon: string;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: "chatbot";
            data?: any;
        }>;
    }>;
    executions: number;
    direction: "input" | "output";
    body: mongoose.Types.DocumentArray<{
        name: string;
        identification: string;
        payloadFieldName: string;
        isCustomField: boolean;
        optional: boolean;
    }>;
    reprocessStatus: "executing" | "stopped" | "stopping";
    reprocessConfigs?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        delay: number;
        order: string;
        interval: number;
        allowedCodes: string[];
    }) | undefined;
    headers?: any;
    externalURL?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "webhooks";
    active: boolean;
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: mongoose.Types.ObjectId | undefined;
    }[];
    name: string;
    workspaceId: mongoose.Types.ObjectId;
    icon: string;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: "chatbot";
            data?: any;
        }>;
    }>;
    executions: number;
    direction: "input" | "output";
    body: mongoose.Types.DocumentArray<{
        name: string;
        identification: string;
        payloadFieldName: string;
        isCustomField: boolean;
        optional: boolean;
    }>;
    reprocessStatus: "executing" | "stopped" | "stopping";
    reprocessConfigs?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        delay: number;
        order: string;
        interval: number;
        allowedCodes: string[];
    }) | undefined;
    headers?: any;
    externalURL?: string | undefined;
}>>;
export { IntegrationSchema, Integration, IntegrationSchemaType };
