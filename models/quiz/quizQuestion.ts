import { QuestionOption } from "./questionOption";

export interface QuizQuestion {
    id?: string
    quizId?: string
    content: string
    answerType?: number
    options: QuestionOption[]
    answer: number[]
    order?: number
    duration?: number
}
