export const GroupSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    jid: string;
    name: string;
    restrict: Date;
    announce: Date;
    participants: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        jid: string;
        role?: "admin" | "superadmin" | "member" | null | undefined;
    }>;
    authorJid: string;
    ownerJid?: string | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const Group: any;
import { default as mongoose } from "mongoose";
