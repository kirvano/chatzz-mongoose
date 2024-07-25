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
declare const LabelConfigsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    description: string;
    fullLogo: string;
    simplifiedLogo: string;
    favicon: string;
    loginBanner: string;
    helpLink: string;
    helpIcon: string;
    helpIconFloatShow: boolean;
    disableUserRegistration: boolean;
    disable: boolean;
    email?: {
        user: string;
        password: string;
        host: string;
        port: string;
    } | undefined;
    domain?: {
        id: string;
        host: string;
        txtName: string;
        txtValue: string;
    } | undefined;
    theme?: {
        primary?: {
            brand?: {
                solid?: {
                    500: string;
                    450: string;
                    400: string;
                    350: string;
                    300: string;
                    200: string;
                    100: string;
                    50: string;
                } | undefined;
                alpha?: {
                    90: string;
                    60: string;
                    30: string;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
export type LabelConfigsSchemaType = mongoose.InferSchemaType<typeof LabelConfigsSchema>;
export declare const LabelConfigs: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    description: string;
    fullLogo: string;
    simplifiedLogo: string;
    favicon: string;
    loginBanner: string;
    helpLink: string;
    helpIcon: string;
    helpIconFloatShow: boolean;
    disableUserRegistration: boolean;
    disable: boolean;
    email?: {
        user: string;
        password: string;
        host: string;
        port: string;
    } | undefined;
    domain?: {
        id: string;
        host: string;
        txtName: string;
        txtValue: string;
    } | undefined;
    theme?: {
        primary?: {
            brand?: {
                solid?: {
                    500: string;
                    450: string;
                    400: string;
                    350: string;
                    300: string;
                    200: string;
                    100: string;
                    50: string;
                } | undefined;
                alpha?: {
                    90: string;
                    60: string;
                    30: string;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    description: string;
    fullLogo: string;
    simplifiedLogo: string;
    favicon: string;
    loginBanner: string;
    helpLink: string;
    helpIcon: string;
    helpIconFloatShow: boolean;
    disableUserRegistration: boolean;
    disable: boolean;
    email?: {
        user: string;
        password: string;
        host: string;
        port: string;
    } | undefined;
    domain?: {
        id: string;
        host: string;
        txtName: string;
        txtValue: string;
    } | undefined;
    theme?: {
        primary?: {
            brand?: {
                solid?: {
                    500: string;
                    450: string;
                    400: string;
                    350: string;
                    300: string;
                    200: string;
                    100: string;
                    50: string;
                } | undefined;
                alpha?: {
                    90: string;
                    60: string;
                    30: string;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>>;
export {};
