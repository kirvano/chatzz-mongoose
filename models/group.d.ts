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
export const GroupSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const Group: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import mongoose = require("mongoose");
