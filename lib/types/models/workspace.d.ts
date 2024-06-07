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
declare const WorkspaceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    status: "active" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired" | "blocked";
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        allowedPaths: string[];
        privacy: "allConversations" | "ownerNotDefinedConversation" | "onlyConversationOwner";
        role: "admin" | "user";
        userId?: mongoose.Types.ObjectId | undefined;
    }>;
    chatRecognition: "noRecognition" | "onlyAdminRecognition" | "allRecognition";
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
        status: "executing" | "paused" | "stopped" | "pausing" | "stopping" | "finished";
        schedulingId: string;
        delay: string;
        startTransmission: Date;
        endTransmission: Date;
        remainingPhoneList: string[];
        phoneList: {
            sent: boolean;
            phoneNumber?: string | undefined;
            error?: string | undefined;
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
            isShared: boolean;
            name?: string | undefined;
            shareOptions?: {
                condition?: {
                    customFields: boolean;
                    tags: boolean;
                } | undefined;
                content?: {
                    texts: boolean;
                    images: boolean;
                    videos: boolean;
                    files: boolean;
                    audios: boolean;
                    contacts: boolean;
                } | undefined;
                menu?: {
                    questions: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                question?: {
                    texts: boolean;
                    audios: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                action?: {
                    customFields: boolean;
                    tags: boolean;
                    services: boolean;
                    members: boolean;
                } | undefined;
                chatbotConnection?: {
                    flows: boolean;
                } | undefined;
            } | undefined;
        }>;
        folderName?: string | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        reply?: string | undefined;
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
    resources: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        active: boolean;
        payments: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            active: boolean;
            paymentIntention?: string | undefined;
            paymentMethod?: string | undefined;
            price?: number | undefined;
        }>;
        type?: "attendant" | "whatsapp" | "webhook" | "transmission" | undefined;
        paymentMethod?: string | undefined;
        resourceId?: mongoose.Types.ObjectId | undefined;
        quantity?: number | undefined;
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
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
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
        planId?: mongoose.Types.ObjectId | undefined;
        paymentMethodId?: string | undefined;
        subscribedAt?: Date | undefined;
    }) | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        main?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        afk?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
    }) | undefined;
    stripeCustomerId?: string | undefined;
    instance?: string | undefined;
    document?: string | undefined;
    email?: string | undefined;
    jid?: string | undefined;
    picture?: string | undefined;
    endsTrial?: Date | undefined;
    canceledAt?: Date | undefined;
}>;
export type WorkspaceSchemaType = mongoose.InferSchemaType<typeof WorkspaceSchema>;
export declare const Workspace: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    status: "active" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired" | "blocked";
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        allowedPaths: string[];
        privacy: "allConversations" | "ownerNotDefinedConversation" | "onlyConversationOwner";
        role: "admin" | "user";
        userId?: mongoose.Types.ObjectId | undefined;
    }>;
    chatRecognition: "noRecognition" | "onlyAdminRecognition" | "allRecognition";
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
        status: "executing" | "paused" | "stopped" | "pausing" | "stopping" | "finished";
        schedulingId: string;
        delay: string;
        startTransmission: Date;
        endTransmission: Date;
        remainingPhoneList: string[];
        phoneList: {
            sent: boolean;
            phoneNumber?: string | undefined;
            error?: string | undefined;
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
            isShared: boolean;
            name?: string | undefined;
            shareOptions?: {
                condition?: {
                    customFields: boolean;
                    tags: boolean;
                } | undefined;
                content?: {
                    texts: boolean;
                    images: boolean;
                    videos: boolean;
                    files: boolean;
                    audios: boolean;
                    contacts: boolean;
                } | undefined;
                menu?: {
                    questions: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                question?: {
                    texts: boolean;
                    audios: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                action?: {
                    customFields: boolean;
                    tags: boolean;
                    services: boolean;
                    members: boolean;
                } | undefined;
                chatbotConnection?: {
                    flows: boolean;
                } | undefined;
            } | undefined;
        }>;
        folderName?: string | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        reply?: string | undefined;
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
    resources: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        active: boolean;
        payments: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            active: boolean;
            paymentIntention?: string | undefined;
            paymentMethod?: string | undefined;
            price?: number | undefined;
        }>;
        type?: "attendant" | "whatsapp" | "webhook" | "transmission" | undefined;
        paymentMethod?: string | undefined;
        resourceId?: mongoose.Types.ObjectId | undefined;
        quantity?: number | undefined;
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
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
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
        planId?: mongoose.Types.ObjectId | undefined;
        paymentMethodId?: string | undefined;
        subscribedAt?: Date | undefined;
    }) | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        main?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        afk?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
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
    status: "active" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired" | "blocked";
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        description?: string | undefined;
    }>;
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        allowedPaths: string[];
        privacy: "allConversations" | "ownerNotDefinedConversation" | "onlyConversationOwner";
        role: "admin" | "user";
        userId?: mongoose.Types.ObjectId | undefined;
    }>;
    chatRecognition: "noRecognition" | "onlyAdminRecognition" | "allRecognition";
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
        status: "executing" | "paused" | "stopped" | "pausing" | "stopping" | "finished";
        schedulingId: string;
        delay: string;
        startTransmission: Date;
        endTransmission: Date;
        remainingPhoneList: string[];
        phoneList: {
            sent: boolean;
            phoneNumber?: string | undefined;
            error?: string | undefined;
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
            isShared: boolean;
            name?: string | undefined;
            shareOptions?: {
                condition?: {
                    customFields: boolean;
                    tags: boolean;
                } | undefined;
                content?: {
                    texts: boolean;
                    images: boolean;
                    videos: boolean;
                    files: boolean;
                    audios: boolean;
                    contacts: boolean;
                } | undefined;
                menu?: {
                    questions: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                question?: {
                    texts: boolean;
                    audios: boolean;
                    invalidAnswers: boolean;
                    customFields: boolean;
                } | undefined;
                action?: {
                    customFields: boolean;
                    tags: boolean;
                    services: boolean;
                    members: boolean;
                } | undefined;
                chatbotConnection?: {
                    flows: boolean;
                } | undefined;
            } | undefined;
        }>;
        folderName?: string | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | undefined;
        reply?: string | undefined;
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
    resources: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        active: boolean;
        payments: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            active: boolean;
            paymentIntention?: string | undefined;
            paymentMethod?: string | undefined;
            price?: number | undefined;
        }>;
        type?: "attendant" | "whatsapp" | "webhook" | "transmission" | undefined;
        paymentMethod?: string | undefined;
        resourceId?: mongoose.Types.ObjectId | undefined;
        quantity?: number | undefined;
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
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
        lastChargeDate?: Date | undefined;
        nextChargeDate?: Date | undefined;
        planId?: mongoose.Types.ObjectId | undefined;
        paymentMethodId?: string | undefined;
        subscribedAt?: Date | undefined;
    }) | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        main?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
        afk?: ({
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            execution: number;
            waitUntil: number;
            automationId?: mongoose.Types.ObjectId | undefined;
            automationType?: "macro" | "chatbot" | null | undefined;
            modifiedBy?: mongoose.Types.ObjectId | undefined;
        }) | undefined;
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
export {};
