import { FieldArray, FormikErrors, useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Quiz } from '../../../models/quiz/quiz';
import { updateQuizForm } from './quizFormSlice';
import QuizQuestionForm from './QuizQuestionForm';
const QuizFormContent = ({ quiz }: { quiz: Quiz }) => {
    const dispatch = useDispatch()
    const { errors }: { errors: FormikErrors<Quiz> } = useFormikContext();
    const updateQuestions = useCallback((indexQuestionToDelete?: number) => {
        const q = quiz.questions.map(i => i.content)
        if ((indexQuestionToDelete ?? -1) > -1) {
            q.splice(indexQuestionToDelete, 1)
        }
        dispatch(updateQuizForm({ questions: q}))
    }, [dispatch, quiz])
    return (
        <div className="text-left my-5">
            <FieldArray name="questions">
                {({ remove, push }) => (
                    <div>
                        {quiz.questions.length > 0 &&
                            quiz.questions.map((question, index) => (
                                <QuizQuestionForm index={index} remove={remove} question={question} key={index} updateQuestions={updateQuestions}></QuizQuestionForm>
                            ))}
                        <div className="w-full mt-4 btn-white-shadow" onClick={() => push({ content: '', options: [], anwsers: [] })}>
                            Ajouter une question
                        </div>
                        {errors.questions && typeof(errors.questions) === 'string' && <div className="error-message">{errors.questions}</div>}
                    </div>
                )}
            </FieldArray>

        </div>
    );
}
export default QuizFormContent
