"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questionnaire = exports.QuestionnaireSchema = exports.QuestionSchema = exports.AnswerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AnswerSchema = new mongoose_1.default.Schema({
    answer: {
        type: String,
        require: true,
    },
    custom: {
        type: Boolean,
        default: false,
    },
});
exports.AnswerSchema = AnswerSchema;
const QuestionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        require: true,
    },
    multipleOptions: {
        type: Boolean,
        default: false,
    },
    isOpenedQuestion: {
        type: Boolean,
        default: false,
    },
    answerOptions: [AnswerSchema],
});
exports.QuestionSchema = QuestionSchema;
const WorkspaceAnswer = new mongoose_1.default.Schema({
    workspaceId: {
        type: String,
        require: true,
    },
    workspaceName: {
        type: String,
        require: true,
    },
    questions: [
        {
            questionId: {
                type: String,
                require: true,
            },
            question: {
                type: String,
                require: true,
            },
            multipleOptions: {
                type: Boolean,
                require: true,
            },
            answers: [AnswerSchema],
        },
    ],
});
const QuestionnaireSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    isLoginQuestionnaire: {
        type: Boolean,
        default: false,
    },
    questions: [QuestionSchema],
    workspaceAnswers: [WorkspaceAnswer],
}, { timestamps: true });
exports.QuestionnaireSchema = QuestionnaireSchema;
const Questionnaire = mongoose_1.default.model("Questionnaire", QuestionnaireSchema);
exports.Questionnaire = Questionnaire;
