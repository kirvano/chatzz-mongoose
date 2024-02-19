export = FlowEvent;
declare const FlowEvent: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variable: string;
    value: Date;
    waitUntil: Date;
    isAwaitingResponse: Date;
    attempts: number;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    stepId?: string | null | undefined;
    baileysResponse?: Date | null | undefined;
    sent?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
