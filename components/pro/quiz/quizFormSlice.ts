import { createSelector, createSlice } from '@reduxjs/toolkit'
import { Quiz } from '../../../models/quiz/quiz'
import { QuizFormState, QuizState } from './quizState'

type QuizFormReducers = {
    updateQuizForm: (state: QuizFormState, action: {type: string, payload: {title?: string, questions?: string[]}}) => void
}

const quizFormSlice = createSlice<QuizFormState, QuizFormReducers, 'quizForm'>({
    name: 'quizForm',
    initialState: {title: '', questions: []},
    reducers: {
      updateQuizForm(state, action) {
          return {...state, ...action.payload}
      }
    }
  })

export const { updateQuizForm } = quizFormSlice.actions

export const quizFormReducer = quizFormSlice.reducer

export const selectQuizForm = createSelector(
    (state: {quizForm: QuizFormState}) => state.quizForm,
    quizForm => quizForm
)
