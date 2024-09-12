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
declare const ChatSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    members: any[];
    attendantUserId: mongoose.Types.ObjectId;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: mongoose.Types.ObjectId;
        action?: string | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    message?: string | undefined;
    status?: {
        caption: "user" | "aguardando" | "bot" | "resolvido" | "encerrado" | "aberto";
        origin: "user" | "bot";
        updatedBy?: {
            updatedAt: Date;
            userId: string;
        } | undefined;
    } | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    workspaceJid?: string | undefined;
}>;
export type ChatSchemaType = mongoose.InferSchemaType<typeof ChatSchema>;
export declare const LiveChat: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    members: any[];
    attendantUserId: mongoose.Types.ObjectId;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: mongoose.Types.ObjectId;
        action?: string | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    message?: string | undefined;
    status?: {
        caption: "user" | "aguardando" | "bot" | "resolvido" | "encerrado" | "aberto";
        origin: "user" | "bot";
        updatedBy?: {
            updatedAt: Date;
            userId: string;
        } | undefined;
    } | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    workspaceJid?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    members: any[];
    attendantUserId: mongoose.Types.ObjectId;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: mongoose.Types.ObjectId;
        action?: string | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    message?: string | undefined;
    status?: {
        caption: "user" | "aguardando" | "bot" | "resolvido" | "encerrado" | "aberto";
        origin: "user" | "bot";
        updatedBy?: {
            updatedAt: Date;
            userId: string;
        } | undefined;
    } | undefined;
    jid?: string | undefined;
    workspaceId?: mongoose.Types.ObjectId | undefined;
    workspaceJid?: string | undefined;
}>>;
export {};
