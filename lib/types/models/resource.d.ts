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
declare const ResourceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "attendant" | "whatsapp" | "webhook" | "transmission";
    price: number;
    active: boolean;
    quantity: number;
    name: string;
    icon: string;
    resourceType: "recharge" | "subscription";
    chargeType: "internal" | "external";
    externalURL?: string | undefined;
    mapping?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        fields: mongoose.Types.DocumentArray<{
            name?: string | undefined;
            identification?: string | undefined;
            value?: string | undefined;
        }>;
        events: mongoose.Types.DocumentArray<{
            id?: string | undefined;
            name?: string | undefined;
            action?: string | undefined;
            identification?: string | undefined;
        }>;
        receivedData?: string | undefined;
    }) | undefined;
    frequency?: number | undefined;
}>;
type ResourceSchemaType = mongoose.InferSchemaType<typeof ResourceSchema>;
declare const Resource: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "attendant" | "whatsapp" | "webhook" | "transmission";
    price: number;
    active: boolean;
    quantity: number;
    name: string;
    icon: string;
    resourceType: "recharge" | "subscription";
    chargeType: "internal" | "external";
    externalURL?: string | undefined;
    mapping?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        fields: mongoose.Types.DocumentArray<{
            name?: string | undefined;
            identification?: string | undefined;
            value?: string | undefined;
        }>;
        events: mongoose.Types.DocumentArray<{
            id?: string | undefined;
            name?: string | undefined;
            action?: string | undefined;
            identification?: string | undefined;
        }>;
        receivedData?: string | undefined;
    }) | undefined;
    frequency?: number | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "attendant" | "whatsapp" | "webhook" | "transmission";
    price: number;
    active: boolean;
    quantity: number;
    name: string;
    icon: string;
    resourceType: "recharge" | "subscription";
    chargeType: "internal" | "external";
    externalURL?: string | undefined;
    mapping?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        fields: mongoose.Types.DocumentArray<{
            name?: string | undefined;
            identification?: string | undefined;
            value?: string | undefined;
        }>;
        events: mongoose.Types.DocumentArray<{
            id?: string | undefined;
            name?: string | undefined;
            action?: string | undefined;
            identification?: string | undefined;
        }>;
        receivedData?: string | undefined;
    }) | undefined;
    frequency?: number | undefined;
}>>;
export { ResourceSchema, ResourceSchemaType, Resource };
