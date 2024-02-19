export = ChatMessage;
declare const ChatMessage: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    date: Date;
    transmissionId: string;
    type?: string | null | undefined;
    text?: string | null | undefined;
    chatId?: string | null | undefined;
    msgId?: string | null | undefined;
    from?: string | null | undefined;
    to?: string | null | undefined;
    url?: string | null | undefined;
    quotedMessage?: string | null | undefined;
    caption?: string | null | undefined;
    read?: Date | null | undefined;
    repliedMsgId?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
import { default as mongoose } from "mongoose";
