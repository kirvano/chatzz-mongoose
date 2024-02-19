export const ContactSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    jid: string;
    fields: any;
    leadValue: number;
    leadOrigin: string;
    tags: any;
    campaigns: any;
    workspaceId?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    automation?: {
        paused: Date;
        pausedForMs: number;
        pausedTill: Date;
    } | null | undefined;
    phoneNumber?: string | null | undefined;
    profilePicture?: string | null | undefined;
    funnelStep?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    jid: string;
    fields: any;
    leadValue: number;
    leadOrigin: string;
    tags: any;
    campaigns: any;
    workspaceId?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    automation?: {
        paused: Date;
        pausedForMs: number;
        pausedTill: Date;
    } | null | undefined;
    phoneNumber?: string | null | undefined;
    profilePicture?: string | null | undefined;
    funnelStep?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    jid: string;
    fields: any;
    leadValue: number;
    leadOrigin: string;
    tags: any;
    campaigns: any;
    workspaceId?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    automation?: {
        paused: Date;
        pausedForMs: number;
        pausedTill: Date;
    } | null | undefined;
    phoneNumber?: string | null | undefined;
    profilePicture?: string | null | undefined;
    funnelStep?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const Contact: any;
import { default as mongoose } from "mongoose";
