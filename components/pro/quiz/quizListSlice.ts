import { createSelector, createSlice } from '@reduxjs/toolkit'
import { Quiz } from '../../../models/quiz/quiz'
import { QuizFormState, QuizState } from './quizState'

type QuizListReducers = {
    editQuiz: (state: QuizState[], action: {type: string, payload: QuizState}) => void
    saveQuiz: (state: QuizState[], action: {type: string, payload: Quiz}) => void
    deleteQuiz: (state: QuizState[], action: {type: string, payload?: QuizState}) => void
}

const quizListSlice = createSlice<QuizState[], QuizListReducers, 'quizList'>({
  name: 'quizList',
  initialState: [],
  reducers: {
    editQuiz(state, action) {
        const quiz = action.payload
        state.forEach(i => {
            i.selected = false
        })
        if (quiz) {
            quiz.selected = true
        } else {
            state.push({selected: true, quiz: {title: '', questions: []}})
        }
    },
    saveQuiz(state, action) {
        const quiz = state.find(i => i.selected)
        state.forEach(i => {
            i.selected = false
        })
        quiz.quiz = action.payload
    },
    deleteQuiz(state, action) {
        let quiz = action.payload
        if (!quiz) {
            quiz = state.find(i => i.selected)
        }
        state.forEach(i => {
            i.selected = false
        })
        if (quiz) {
            const index = state.indexOf(quiz)
            state.splice(index, 1)
        }
    },
  }
})


export const { editQuiz, saveQuiz, deleteQuiz } = quizListSlice.actions

export const quizListReducer = quizListSlice.reducer

export const selectSelectedQuiz = createSelector(
    (state: {quizList: QuizState[]}) => state.quizList,
    quizList => quizList.find(i => i.selected)
)

export const selectQuizList = createSelector(
    (state: {quizList: QuizState[]}) => state.quizList,
    quizList => quizList
)