export const BusinessGroupSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const BusinessGroup: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPhysicalPerson: Date;
    name?: string | null | undefined;
    email?: string | null | undefined;
    document?: string | null | undefined;
    phone?: string | null | undefined;
    address?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
