import { Quiz } from "../../../models/quiz/quiz"
import { ErrorMessage, Field, FormikErrors } from 'formik';
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateQuizForm } from "./quizFormSlice";
import { deleteQuiz } from "./quizListSlice";
import { TrashIcon } from "@heroicons/react/solid";
import classnames from 'classnames'
const QuizFormHeader = ({ submitForm, isSubmitting, errors }: { submitForm: () => Promise<void>, isSubmitting: boolean, errors: FormikErrors<Quiz> }) => {
    const dispatch = useDispatch()
    const updateTitle = useCallback(async (value: string) => {
        dispatch(updateQuizForm({ title: value }))
    }, [dispatch])
    const deleteCurrentQuiz = useCallback(() => {
        dispatch(deleteQuiz())
    }, [dispatch])
    return (
        <>
            <div className="flex text-white upppercase mt-6 justify-end text-center font-fat text-xs">
                <span className="w-40 mx-4 btn-animation bg-white bg-opacity-20 hover:bg-opacity-30" onClick={submitForm}>
                    Enregistrer
                        </span>
                <span className="w-40 mx-4 btn-animation bg-white bg-opacity-20 hover:bg-opacity-30">
                    Aperçu
                        </span>
                <span className="w-40 ml-4 btn-animation bg-white bg-opacity-20 hover:bg-opacity-30">
                    Activer
                </span>
                <span className="w-8 ml-4 btn-animation bg-danger text-white transform hover:scale-150" onClick={deleteCurrentQuiz}>
                    <TrashIcon />
                </span>
            </div>
            <div className="mt-6 text-left">
                <div className="font-bold text-white flex flex-col">
                    <div className="uppercase text-3xl font-bold font-fat px-3 text-white">
                        Titre
                    </div>
                    <Field name="title">
                        {({
                            field: { onBlur, value, ...other }
                        }) => (
                            <input type="text" className={classnames('bg-black bg-opacity-20 rounded-full px-3 py-1 text-white placeholder-white::placeholder', {
                                'error-border': errors.title
                            })} placeholder="" {...other} onBlur={() => updateTitle(value)} value={value}></input>
                        )}
                    </Field>
                    <ErrorMessage
                        name="title"
                        component="div"
                        className="error-message"
                    />
                </div>
            </div>
        </>
    )
}
export default QuizFormHeader

