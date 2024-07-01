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
declare const ContactSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        _id: string;
        value: string;
    }[];
    tags: {
        _id?: string | undefined;
    }[];
    jid: string;
    campaigns: {
        _id?: string | undefined;
    }[];
    actions: {
        _id: mongoose.Types.ObjectId;
        isCompleted: boolean;
    }[];
    leadValue: number;
    leadOrigin: string;
    onWhatsapp: boolean;
    verified: boolean;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    workspaceId?: string | undefined;
    profilePicture?: string | undefined;
    automation?: {
        paused: boolean;
        pausedForMs: number;
        pausedTill: Date;
    } | undefined;
    funnelStep?: mongoose.Types.ObjectId | undefined;
    funnelStepDate?: Date | undefined;
    verifiedAt?: Date | undefined;
}>;
type ContactSchemaType = mongoose.InferSchemaType<typeof ContactSchema>;
declare const Contact: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        _id: string;
        value: string;
    }[];
    tags: {
        _id?: string | undefined;
    }[];
    jid: string;
    campaigns: {
        _id?: string | undefined;
    }[];
    actions: {
        _id: mongoose.Types.ObjectId;
        isCompleted: boolean;
    }[];
    leadValue: number;
    leadOrigin: string;
    onWhatsapp: boolean;
    verified: boolean;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    workspaceId?: string | undefined;
    profilePicture?: string | undefined;
    automation?: {
        paused: boolean;
        pausedForMs: number;
        pausedTill: Date;
    } | undefined;
    funnelStep?: mongoose.Types.ObjectId | undefined;
    funnelStepDate?: Date | undefined;
    verifiedAt?: Date | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fields: {
        _id: string;
        value: string;
    }[];
    tags: {
        _id?: string | undefined;
    }[];
    jid: string;
    campaigns: {
        _id?: string | undefined;
    }[];
    actions: {
        _id: mongoose.Types.ObjectId;
        isCompleted: boolean;
    }[];
    leadValue: number;
    leadOrigin: string;
    onWhatsapp: boolean;
    verified: boolean;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    workspaceId?: string | undefined;
    profilePicture?: string | undefined;
    automation?: {
        paused: boolean;
        pausedForMs: number;
        pausedTill: Date;
    } | undefined;
    funnelStep?: mongoose.Types.ObjectId | undefined;
    funnelStepDate?: Date | undefined;
    verifiedAt?: Date | undefined;
}>>;
export { ContactSchema, Contact, ContactSchemaType };
