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
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: {
            prototype?: mongoose.Types.ObjectId | undefined;
            cacheHexString?: unknown;
            generate?: {} | undefined;
            createFromTime?: {} | undefined;
            createFromHexString?: {} | undefined;
            isValid?: {} | undefined;
        } | undefined;
    }[];
    name: string;
    active: boolean;
    workspaceId: mongoose.Types.ObjectId;
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
    icon: string;
    executions: number;
    direction: "input" | "output";
}>;
declare const Integration: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "webhooks";
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: {
            prototype?: mongoose.Types.ObjectId | undefined;
            cacheHexString?: unknown;
            generate?: {} | undefined;
            createFromTime?: {} | undefined;
            createFromHexString?: {} | undefined;
            isValid?: {} | undefined;
        } | undefined;
    }[];
    name: string;
    active: boolean;
    workspaceId: mongoose.Types.ObjectId;
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
    icon: string;
    executions: number;
    direction: "input" | "output";
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "webhooks";
    fields: {
        name: string;
        key: string;
        value: string;
        prefix?: string | undefined;
        customField?: {
            prototype?: mongoose.Types.ObjectId | undefined;
            cacheHexString?: unknown;
            generate?: {} | undefined;
            createFromTime?: {} | undefined;
            createFromHexString?: {} | undefined;
            isValid?: {} | undefined;
        } | undefined;
    }[];
    name: string;
    active: boolean;
    workspaceId: mongoose.Types.ObjectId;
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
    icon: string;
    executions: number;
    direction: "input" | "output";
}>>;
export { IntegrationSchema, Integration };