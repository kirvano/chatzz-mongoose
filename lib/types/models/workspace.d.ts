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
export declare const Workspace: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    status: "canceled" | "active" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired" | "blocked";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        allowedPaths: string[];
        role: "admin" | "user";
        userId?: mongoose.Types.ObjectId | undefined;
    }>;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: {
            status: boolean;
            flowName?: string | undefined;
            time?: any;
        }[];
        name?: string | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: {
            sent: boolean;
            phoneNumber?: string | undefined;
        }[];
        isScheduled: boolean;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        name?: string | undefined;
        flowId?: string | undefined;
        executionTime?: {
            start: string;
            end: string;
        } | undefined;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        situation?: boolean | undefined;
        condition?: string | undefined;
        keyword?: string | undefined;
        conversationflow?: string | undefined;
    }>;
    folderList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flowList: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            flow: {
                edges: any[];
                nodes: any[];
                flowSteps: any[];
                viewport?: any;
            }[];
            ctr: number;
            name?: string | undefined;
        }>;
        folderName?: string | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        reply?: string | undefined;
    }>;
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | undefined;
        name?: string | undefined;
        flow?: string | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: boolean;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | undefined;
        startHour?: Date | undefined;
        endHour?: Date | undefined;
    }>;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    plan?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        appliedCoupons: mongoose.Types.DocumentArray<{
            code: string;
            remainingUses: number;
        }>;
        charges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            id?: string | undefined;
            amount?: number | undefined;
            amount_capturable?: number | undefined;
            amount_received?: number | undefined;
            paidAt?: Date | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: boolean;
            userId?: mongoose.Types.ObjectId | undefined;
            planId?: mongoose.Types.ObjectId | undefined;
            dateToUpdate?: Date | undefined;
        }>;
        planId?: mongoose.Types.ObjectId | undefined;
        paymentMethodId?: string | undefined;
        subscribedAt?: Date | undefined;
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
    }) | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: {
            execution: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
        main?: {
            execution: number;
            waitUntil: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
        afk?: {
            execution: number;
            waitUntil: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
    }) | undefined;
    stripeCustomerId?: string | undefined;
    instance?: string | undefined;
    document?: string | undefined;
    email?: string | undefined;
    jid?: string | undefined;
    picture?: string | undefined;
    endsTrial?: Date | undefined;
    canceledAt?: Date | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    status: "canceled" | "active" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired" | "blocked";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        allowedPaths: string[];
        role: "admin" | "user";
        userId?: mongoose.Types.ObjectId | undefined;
    }>;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: {
            status: boolean;
            flowName?: string | undefined;
            time?: any;
        }[];
        name?: string | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: {
            sent: boolean;
            phoneNumber?: string | undefined;
        }[];
        isScheduled: boolean;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        name?: string | undefined;
        flowId?: string | undefined;
        executionTime?: {
            start: string;
            end: string;
        } | undefined;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        situation?: boolean | undefined;
        condition?: string | undefined;
        keyword?: string | undefined;
        conversationflow?: string | undefined;
    }>;
    folderList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flowList: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            flow: {
                edges: any[];
                nodes: any[];
                flowSteps: any[];
                viewport?: any;
            }[];
            ctr: number;
            name?: string | undefined;
        }>;
        folderName?: string | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        reply?: string | undefined;
    }>;
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | undefined;
        name?: string | undefined;
        flow?: string | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: boolean;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | undefined;
        startHour?: Date | undefined;
        endHour?: Date | undefined;
    }>;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    plan?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        appliedCoupons: mongoose.Types.DocumentArray<{
            code: string;
            remainingUses: number;
        }>;
        charges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            id?: string | undefined;
            amount?: number | undefined;
            amount_capturable?: number | undefined;
            amount_received?: number | undefined;
            paidAt?: Date | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: boolean;
            userId?: mongoose.Types.ObjectId | undefined;
            planId?: mongoose.Types.ObjectId | undefined;
            dateToUpdate?: Date | undefined;
        }>;
        planId?: mongoose.Types.ObjectId | undefined;
        paymentMethodId?: string | undefined;
        subscribedAt?: Date | undefined;
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
    }) | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: {
            execution: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
        main?: {
            execution: number;
            waitUntil: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
        afk?: {
            execution: number;
            waitUntil: number;
            chatbotId?: mongoose.Types.ObjectId | undefined;
        } | undefined;
    }) | undefined;
    stripeCustomerId?: string | undefined;
    instance?: string | undefined;
    document?: string | undefined;
    email?: string | undefined;
    jid?: string | undefined;
    picture?: string | undefined;
    endsTrial?: Date | undefined;
    canceledAt?: Date | undefined;
}>>;