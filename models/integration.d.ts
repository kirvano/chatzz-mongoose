export const IntegrationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "webhooks";
    fields: any;
    name: string;
    active: Date;
    icon: string;
    executions: number;
    direction: "input" | "output";
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: string;
            data?: any;
        }>;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "webhooks";
    fields: any;
    name: string;
    active: Date;
    icon: string;
    executions: number;
    direction: "input" | "output";
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: string;
            data?: any;
        }>;
    }>;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    type: "webhooks";
    fields: any;
    name: string;
    active: Date;
    icon: string;
    executions: number;
    direction: "input" | "output";
    events: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        key: string;
        actions: mongoose.Types.DocumentArray<{
            type: string;
            data?: any;
        }>;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const Integration: any;
import { default as mongoose } from "mongoose";
