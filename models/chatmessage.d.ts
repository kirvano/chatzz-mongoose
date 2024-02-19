/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
import mongoose = require("mongoose");
