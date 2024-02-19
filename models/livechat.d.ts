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
export = LiveChat;
declare const LiveChat: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import mongoose = require("mongoose");
