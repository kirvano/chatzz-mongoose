import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    require: true,
  },
  custom: {
    type: Boolean,
    default: false,
  },
});

const QuestionSchema = new mongoose.Schema({
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

const WorkspaceAnswer = new mongoose.Schema({
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

const QuestionnaireSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

type QuestionnaireSchemaType = mongoose.InferSchemaType<
  typeof QuestionnaireSchema
>;

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

export {
  AnswerSchema,
  QuestionSchema,
  QuestionnaireSchema,
  Questionnaire,
  QuestionnaireSchemaType,
};
