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
declare const PlanSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "internal" | "external";
    active: boolean;
    visibility: "visible" | "only_checkout";
    freeDays: number;
    support: boolean;
    accountManager: boolean;
    onboarding: boolean;
    integration: boolean;
    chatbotAccess: boolean;
    campaignAccess: boolean;
    transmissionAccess: boolean;
    webhooksAccess: boolean;
    funnelSalesAccess: boolean;
    price?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    checkoutURL?: string | undefined;
    chargeFrequency?: number | undefined;
    attendants?: number | undefined;
    massShooting?: number | undefined;
    webhookExecutions?: number | undefined;
}>;
export type PlanSchemaType = mongoose.InferSchemaType<typeof PlanSchema>;
export declare const Plan: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "internal" | "external";
    active: boolean;
    visibility: "visible" | "only_checkout";
    freeDays: number;
    support: boolean;
    accountManager: boolean;
    onboarding: boolean;
    integration: boolean;
    chatbotAccess: boolean;
    campaignAccess: boolean;
    transmissionAccess: boolean;
    webhooksAccess: boolean;
    funnelSalesAccess: boolean;
    price?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    checkoutURL?: string | undefined;
    chargeFrequency?: number | undefined;
    attendants?: number | undefined;
    massShooting?: number | undefined;
    webhookExecutions?: number | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "internal" | "external";
    active: boolean;
    visibility: "visible" | "only_checkout";
    freeDays: number;
    support: boolean;
    accountManager: boolean;
    onboarding: boolean;
    integration: boolean;
    chatbotAccess: boolean;
    campaignAccess: boolean;
    transmissionAccess: boolean;
    webhooksAccess: boolean;
    funnelSalesAccess: boolean;
    price?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    checkoutURL?: string | undefined;
    chargeFrequency?: number | undefined;
    attendants?: number | undefined;
    massShooting?: number | undefined;
    webhookExecutions?: number | undefined;
}>>;
export {};
