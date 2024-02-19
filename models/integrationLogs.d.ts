export const IntegrationLogsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: "error" | "info" | "warning";
        message: string;
    }>;
    integrationId: Buffer;
    payloads: Buffer[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: "error" | "info" | "warning";
        message: string;
    }>;
    integrationId: Buffer;
    payloads: Buffer[];
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: "error" | "info" | "warning";
        message: string;
    }>;
    integrationId: Buffer;
    payloads: Buffer[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const IntegrationLogs: any;
import { default as mongoose } from "mongoose";
