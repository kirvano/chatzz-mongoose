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
export const MessageScheduleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const MessageSchedule: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "text" | "macro";
    data: Buffer;
    userId: Buffer;
    jobId: string;
    scheduledAt: Date;
    contactId?: any;
    groupId?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import mongoose = require("mongoose");
