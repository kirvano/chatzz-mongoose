export const CouponSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "value" | "percentage";
    value: number;
    code: string;
    usesQuantity: number;
    validMonths: number;
    allowedPlans: any;
    uses: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        chargeId: string;
    }>;
    active: Date;
    expiration?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "value" | "percentage";
    value: number;
    code: string;
    usesQuantity: number;
    validMonths: number;
    allowedPlans: any;
    uses: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        chargeId: string;
    }>;
    active: Date;
    expiration?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "value" | "percentage";
    value: number;
    code: string;
    usesQuantity: number;
    validMonths: number;
    allowedPlans: any;
    uses: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        chargeId: string;
    }>;
    active: Date;
    expiration?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export const Coupon: any;
import { default as mongoose } from "mongoose";
