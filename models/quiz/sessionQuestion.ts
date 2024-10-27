import { QuestionContent } from './questionContent'
import { QuestionOption } from './questionOption'

export class SessionQuestion {
    id: string
    content: QuestionContent[]
    answerType: 'single' | 'multiple'
    options: QuestionOption[]
    answer: number[]
}
