export const FunnelSalesSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    name: string;
    steps: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
    }>;
    author: Buffer;
    status: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    name: string;
    steps: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
    }>;
    author: Buffer;
    status: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: Buffer;
    name: string;
    steps: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
    }>;
    author: Buffer;
    status: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const FunnelSales: any;
import { default as mongoose } from "mongoose";
