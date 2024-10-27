import { Quiz } from "../../../models/quiz/quiz";

export interface QuizState {
    selected: boolean
    quiz: Quiz
}

export interface QuizFormState {
    title: string
    questions: string[]
}
