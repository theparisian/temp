import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editQuiz, selectSelectedQuiz } from './quizListSlice'

const AddQuizButton = () => {
    const dispatch = useDispatch()
    const quiz = useSelector(selectSelectedQuiz)
    const addQuizCallback = useCallback(async () => {
        if (!quiz || quiz.quiz?.id) {
            dispatch(editQuiz(null))
        }
    }, [dispatch, quiz])
    return (
        <span className="mb-6 mx-auto w-4/5 btn-animation bg-blue-500 font-fat text-white" onClick={addQuizCallback}>
            Créer un quizz
        </span>
    )
}
export default AddQuizButton