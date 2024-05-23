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
export declare const ContactAnnotationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    workspaceId: mongoose.Types.ObjectId;
    contactId: mongoose.Types.ObjectId;
    author?: {
        _id: mongoose.Types.ObjectId;
        name: string;
    } | undefined;
}>;
export type ContactAnnotationSchemaType = mongoose.InferSchemaType<typeof ContactAnnotationSchema>;
export declare const ContactAnnotation: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    workspaceId: mongoose.Types.ObjectId;
    contactId: mongoose.Types.ObjectId;
    author?: {
        _id: mongoose.Types.ObjectId;
        name: string;
    } | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    workspaceId: mongoose.Types.ObjectId;
    contactId: mongoose.Types.ObjectId;
    author?: {
        _id: mongoose.Types.ObjectId;
        name: string;
    } | undefined;
}>>;
