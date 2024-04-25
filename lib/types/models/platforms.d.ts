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
declare const PlatformsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        name: string;
        key: string;
        value: string;
    }[];
    name: string;
    plan: mongoose.Types.ObjectId;
    active: boolean;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        action: "pay" | "cancel" | "inactivate";
        identification: string;
    }>;
    icon: string;
    executions: number;
}>;
type PlatformsSchemaType = mongoose.InferSchemaType<typeof PlatformsSchema>;
declare const Platform: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        name: string;
        key: string;
        value: string;
    }[];
    name: string;
    plan: mongoose.Types.ObjectId;
    active: boolean;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        action: "pay" | "cancel" | "inactivate";
        identification: string;
    }>;
    icon: string;
    executions: number;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        name: string;
        key: string;
        value: string;
    }[];
    name: string;
    plan: mongoose.Types.ObjectId;
    active: boolean;
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        action: "pay" | "cancel" | "inactivate";
        identification: string;
    }>;
    icon: string;
    executions: number;
}>>;
export { PlatformsSchema, Platform, PlatformsSchemaType };
