import React, { useCallback } from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Quiz } from '../../../models/quiz/quiz'
import QuizFormContent from './QuizFormContent'
import QuizFormHeader from './QuizFormHeader'
import { saveQuiz, selectSelectedQuiz } from './quizListSlice'
import { updateQuizForm } from './quizFormSlice'
import * as Yup from 'yup'

const optionSchema = Yup.object().shape({
    content: Yup.string()
        .max(100, 'Too Long!')
        .required('Required'),
})

const quesetionSchema = Yup.object().shape({
    content: Yup.string()
        .max(100, 'Too Long!')
        .required('Required'),
    // answer: Yup.array().min(1, 'at least 1 anwser!'),
    options: Yup.array()
        .min(1, 'at least 1 anwser!')
        .of(optionSchema),
})

const quizSchema = Yup.object().shape({
    title: Yup.string()
        .max(100, 'Too Long!')
        .required('Required'),
    questions: Yup.array()
        .min(1, 'at least 1 question!')
        .max(50, 'Too many questions!')
        .required('Required')
        .of(quesetionSchema)
});
const QuizForm = () => {
    const quizState = useSelector(selectSelectedQuiz)
    const dispatch = useDispatch()
    const save = useCallback(async (values) => {
        values.id = new Date().toUTCString()
        dispatch(saveQuiz(values))
        dispatch(updateQuizForm({ title: '', questions: [] }))
    }, [dispatch])
    if (!quizState) {
        return null
    }
    const quiz = JSON.parse(JSON.stringify(quizState.quiz)) as Quiz

    return (
        <div className="max-w-screen-md mx-auto flex flex-col px-5">
            <Formik validationSchema={quizSchema} validateOnBlur
                initialValues={{ title: quiz.title, questions: quiz.questions }}
                onSubmit={save}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <QuizFormHeader submitForm={props.submitForm} isSubmitting={props.isSubmitting} errors={props.errors}></QuizFormHeader>
                        <QuizFormContent quiz={props.values}></QuizFormContent>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export default QuizForm
