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
export = Workspace;
declare const Workspace: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    campaigns: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        ctr: number;
        message?: string | null | undefined;
        name?: string | null | undefined;
        flow?: string | null | undefined;
    }>;
    status: "active" | "blocked" | "canceled" | "inactive" | "requires_plan" | "awaiting_payment" | "in_cancellation" | "free_trial" | "expired";
    members: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        role: "admin" | "user";
        allowedPaths: string[];
        userId?: any;
    }>;
    userId: Buffer;
    sequenceList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        flow: any;
        name?: string | null | undefined;
    }>;
    transmissionsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        schedulingId: string;
        delay: string;
        phoneList: any;
        isScheduled: Date;
        daysOfWeek: string[];
        scheduledDateTime: Date;
        flowId?: string | null | undefined;
        name?: string | null | undefined;
        executionTime?: any;
    }>;
    keywordsList: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        execution: number;
        condition?: string | null | undefined;
        situation?: Date | null | undefined;
        keyword?: string | null | undefined;
        conversationflow?: string | null | undefined;
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
            flow: any;
            ctr: number;
            name?: string | null | undefined;
        }>;
        folderName?: string | null | undefined;
    }>;
    customFields: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        description?: string | null | undefined;
    }>;
    fastReplies: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name?: string | null | undefined;
        reply?: string | null | undefined;
    }>;
    openHours: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isOpen: Date;
        weekDay?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null | undefined;
        startHour?: Date | null | undefined;
        endHour?: Date | null | undefined;
    }>;
    jid?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    stripeCustomerId?: string | null | undefined;
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
            id?: string | null | undefined;
            status?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | null | undefined;
            amount?: number | null | undefined;
            amount_capturable?: number | null | undefined;
            amount_received?: number | null | undefined;
            paidAt?: Date | null | undefined;
        }>;
        historyChanges: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            isUpdated: Date;
            userId?: any;
            planId?: any;
            dateToUpdate?: Date | null | undefined;
        }>;
        planId?: any;
        paymentMethodId?: string | null | undefined;
        subscribedAt?: Date | null | undefined;
        lastChargeDate?: Date | null | undefined;
        nextChargeDate?: Date | null | undefined;
    }) | null | undefined;
    inputFlow?: ({
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        welcome?: any;
        main?: any;
        afk?: any;
    }) | null | undefined;
    instance?: string | null | undefined;
    picture?: string | null | undefined;
    endsTrial?: Date | null | undefined;
    canceledAt?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import mongoose = require("mongoose");
