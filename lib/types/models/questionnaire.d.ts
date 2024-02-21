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
declare const AnswerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    custom: boolean;
    answer?: string | undefined;
}>;
declare const QuestionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    multipleOptions: boolean;
    isOpenedQuestion: boolean;
    answerOptions: mongoose.Types.DocumentArray<{
        custom: boolean;
        answer?: string | undefined;
    }>;
    question?: string | undefined;
}>;
declare const QuestionnaireSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    questions: mongoose.Types.DocumentArray<{
        multipleOptions: boolean;
        isOpenedQuestion: boolean;
        answerOptions: mongoose.Types.DocumentArray<{
            custom: boolean;
            answer?: string | undefined;
        }>;
        question?: string | undefined;
    }>;
    isLoginQuestionnaire: boolean;
    workspaceAnswers: mongoose.Types.DocumentArray<{
        questions: {
            answers: mongoose.Types.DocumentArray<{
                custom: boolean;
                answer?: string | undefined;
            }>;
            question?: string | undefined;
            multipleOptions?: boolean | undefined;
            questionId?: string | undefined;
        }[];
        workspaceId?: string | undefined;
        workspaceName?: string | undefined;
    }>;
    name?: string | undefined;
    description?: string | undefined;
}>;
type QuestionnaireSchemaType = mongoose.InferSchemaType<typeof QuestionnaireSchema>;
declare const Questionnaire: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    questions: mongoose.Types.DocumentArray<{
        multipleOptions: boolean;
        isOpenedQuestion: boolean;
        answerOptions: mongoose.Types.DocumentArray<{
            custom: boolean;
            answer?: string | undefined;
        }>;
        question?: string | undefined;
    }>;
    isLoginQuestionnaire: boolean;
    workspaceAnswers: mongoose.Types.DocumentArray<{
        questions: {
            answers: mongoose.Types.DocumentArray<{
                custom: boolean;
                answer?: string | undefined;
            }>;
            question?: string | undefined;
            multipleOptions?: boolean | undefined;
            questionId?: string | undefined;
        }[];
        workspaceId?: string | undefined;
        workspaceName?: string | undefined;
    }>;
    name?: string | undefined;
    description?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    questions: mongoose.Types.DocumentArray<{
        multipleOptions: boolean;
        isOpenedQuestion: boolean;
        answerOptions: mongoose.Types.DocumentArray<{
            custom: boolean;
            answer?: string | undefined;
        }>;
        question?: string | undefined;
    }>;
    isLoginQuestionnaire: boolean;
    workspaceAnswers: mongoose.Types.DocumentArray<{
        questions: {
            answers: mongoose.Types.DocumentArray<{
                custom: boolean;
                answer?: string | undefined;
            }>;
            question?: string | undefined;
            multipleOptions?: boolean | undefined;
            questionId?: string | undefined;
        }[];
        workspaceId?: string | undefined;
        workspaceName?: string | undefined;
    }>;
    name?: string | undefined;
    description?: string | undefined;
}>>;
export { AnswerSchema, QuestionSchema, QuestionnaireSchema, Questionnaire, QuestionnaireSchemaType, };
