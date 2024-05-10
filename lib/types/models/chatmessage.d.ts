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
declare const MessageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | undefined;
    text?: string | undefined;
    from?: string | undefined;
    read?: boolean | undefined;
    to?: string | undefined;
    caption?: string | undefined;
    chatId?: string | undefined;
    msgId?: string | undefined;
    url?: string | undefined;
    quotedMessage?: string | undefined;
    additionalInfo?: {
        workspaceId?: mongoose.Types.ObjectId | undefined;
        senderInfo?: {
            id?: mongoose.Types.ObjectId | undefined;
            name?: string | undefined;
        } | undefined;
    } | undefined;
    repliedMsgId?: string | undefined;
}>;
export type MessageSchemaType = mongoose.InferSchemaType<typeof MessageSchema>;
export declare const ChatMessage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | undefined;
    text?: string | undefined;
    from?: string | undefined;
    read?: boolean | undefined;
    to?: string | undefined;
    caption?: string | undefined;
    chatId?: string | undefined;
    msgId?: string | undefined;
    url?: string | undefined;
    quotedMessage?: string | undefined;
    additionalInfo?: {
        workspaceId?: mongoose.Types.ObjectId | undefined;
        senderInfo?: {
            id?: mongoose.Types.ObjectId | undefined;
            name?: string | undefined;
        } | undefined;
    } | undefined;
    repliedMsgId?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | undefined;
    text?: string | undefined;
    from?: string | undefined;
    read?: boolean | undefined;
    to?: string | undefined;
    caption?: string | undefined;
    chatId?: string | undefined;
    msgId?: string | undefined;
    url?: string | undefined;
    quotedMessage?: string | undefined;
    additionalInfo?: {
        workspaceId?: mongoose.Types.ObjectId | undefined;
        senderInfo?: {
            id?: mongoose.Types.ObjectId | undefined;
            name?: string | undefined;
        } | undefined;
    } | undefined;
    repliedMsgId?: string | undefined;
}>>;
export {};
