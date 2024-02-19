export = AwaitingResponse;
declare const AwaitingResponse: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    options: any;
    variable: string;
    value: Date;
    waitUntil: Date;
    workspaceId?: string | null | undefined;
    flowId?: string | null | undefined;
    jid?: string | null | undefined;
    nextStep?: Date | null | undefined;
    step?: Date | null | undefined;
    attempted?: number | null | undefined;
    idTimesUpJobDispatch?: string | null | undefined;
    shouldIgnoreResponse?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
