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
import mongoose from "mongoose";
declare const EventsLogsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    message: string;
    createdAt: Date;
    level: string;
    queue?: string | undefined;
    instance?: string | undefined;
    data?: string | undefined;
    stack?: string | undefined;
}>;
type EventsLogsSchemaType = mongoose.InferSchemaType<typeof EventsLogsSchema>;
declare const EventsLogs: mongoose.Model<{
    message: string;
    createdAt: Date;
    level: string;
    queue?: string | undefined;
    instance?: string | undefined;
    data?: string | undefined;
    stack?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    message: string;
    createdAt: Date;
    level: string;
    queue?: string | undefined;
    instance?: string | undefined;
    data?: string | undefined;
    stack?: string | undefined;
}>>;
export { EventsLogsSchema, EventsLogs, EventsLogsSchemaType };
