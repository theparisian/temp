import { QuizSession } from "./models/quiz/quizSession"
import { SessionQuestion } from "./models/quiz/sessionQuestion"


const question1: SessionQuestion = {
    id: 'id1',
    content: [{ type: 'text', content: 'Quelle est la racine carrée de 36 ?' }],
    options: [
        { content: '6' },
        { content: '9' },
        { content: '12' },
        { content: '18' }],
    answerType: 'single',
    answer: []
}
const question2: SessionQuestion = {
    id: 'id2',
    content: [{ type: 'text', content: 'La somme des angles d\'un triangle est égale à ?' }],
    options: [
        { content: '90°' },
        { content: '180°' },
        { content: '360°' },
        { content: '720°' }],
    answerType: 'single',
    answer: []
}

const question3: SessionQuestion = {
    id: 'id3',
    content: [{ type: 'text', content: 'Combien compte-t-on de jours durant le mois de juillet ?' }],
    options: [
        { content: '28' },
        { content: '29' },
        { content: '30' },
        { content: '31' }],
    answerType: 'single',
    answer: []
}

const questions = [question1, question2, question3]

export const sampleQuizSession: QuizSession = {
    id: '1',
    questions
}
