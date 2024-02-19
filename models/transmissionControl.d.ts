export const TransmissionControlSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const TransmissionControl: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    workspaceId: string;
    flowId: string;
    from: string;
    to: string;
    trasmissionId: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
