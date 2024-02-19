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
export = User;
declare const User: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    phoneNumber: string;
    profilePicture: string;
    active: Date;
    role: "superadmin" | "user";
    wallet: any;
    blocked: Date;
    logLoginList: any;
    passwordSetted: Date;
    email?: string | null | undefined;
    document?: string | null | undefined;
    userId?: string | null | undefined;
    username?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
    password?: string | null | undefined;
    userAddress?: any;
    businessGroupId?: string | null | undefined;
    isLegalEntity?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import mongoose = require("mongoose");
