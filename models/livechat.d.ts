export = LiveChat;
declare const LiveChat: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: Date;
    attendantUserId: Buffer;
    assignmentHistory: mongoose.Types.DocumentArray<{
        attendantUserId: Buffer;
        action?: string | null | undefined;
    }>;
    contactOrigin: "message" | "campaigns" | "entry_chatbots" | "dispatches";
    members: Date;
    workspaceId?: any;
    jid?: string | null | undefined;
    message?: string | null | undefined;
    status?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
