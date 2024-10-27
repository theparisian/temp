import CloseButton from '../../shared/components/button/CloseButton'
import { QuestionOption } from '../../../models/quiz/questionOption'
import { QuizQuestion } from '../../../models/quiz/quizQuestion'
import React, { useCallback } from 'react'
import { ErrorMessage, Field, FieldArray, FormikErrors, useFormikContext } from 'formik'
import { useDispatch } from 'react-redux'
import { updateQuizForm } from './quizFormSlice'
import { Quiz } from '../../../models/quiz/quiz'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/solid'
import classnames from 'classnames'
const QuizQuestionForm = ({ index, remove, question, updateQuestions }: { index: number, remove: any, question: QuizQuestion, updateQuestions: (indexQuestionToDelete?: number) => void }) => {
    const { errors }: { errors: FormikErrors<Quiz> } = useFormikContext();
    const questionErr = errors.questions?.[index] as FormikErrors<QuizQuestion>
    let contentError = questionErr?.options && typeof(questionErr.options) === 'string' && questionErr.content
    let optionsError = questionErr?.options && typeof(questionErr.options) === 'string' && questionErr.options 
    return (
        <div className="w-full p-4 rounded-xl bg-white my-2 shadow-2xl">
            <div className="flex justify-between font-bold text-xl">
                <span className="uppercase font-fat text-base px-2">Question {index + 1}</span>
                <CloseButton onClose={() => {
                    updateQuestions(index)
                    remove(index)
                }}></CloseButton>
            </div>
            <div className="flex mt-0 mb-6 items-center">
                <Field name={`questions.${index}.content`}>
                    {({
                        field: { onBlur, value, ...other }
                    }) => (
                        <input type="text" className={classnames('w-3/4 bg-gray-100 rounded-2xl px-3 py-1', {
                            'error-border': contentError
                        })} placeholder="" {...other} onBlur={() => updateQuestions()} value={value}></input>
                    )}
                </Field>
                {contentError && <div className="error-message">{contentError}</div>}
                {/* <input type="text" className="w-1/12 bg-gray-100 rounded-2xl px-3 py-1 ml-2"></input>
                <span className="ml-2 opacity-50 text-xs">Secondes</span> */}
            </div>
            <div className="mt-3">
                <FieldArray name={`questions.${index}.options`}>
                    {({ remove: removeOption, push: pushOption }) => (
                        <div>
                            {question.options.length > 0 &&
                                question.options.map((option, optionIndex) => (
                                    <div className="my-2" key={optionIndex}>
                                        <div className="mx-2">Réponse {optionIndex + 1}</div>
                                        <div className="flex">
                                            <Field
                                                name={`questions.${index}.options.${optionIndex}.content`}
                                                placeholder=""
                                                type="text"
                                                className={classnames('w-3/4 bg-gray-100 rounded-2xl px-3 py-1', {
                                                    'error-border': (questionErr?.options?.[optionIndex] as FormikErrors<QuestionOption>)?.content
                                                })}
                                            />
                                            <div className="px-3 flex">
                                                <Field id={`questions.${index}.options.${optionIndex}.isAnwser`}
                                                    name={`questions.${index}.options.${optionIndex}.isAnwser`}
                                                    placeholder=""
                                                    type="checkbox"
                                                    className="hidden"
                                                />
                                                <label htmlFor={`questions.${index}.options.${optionIndex}.isAnwser`} className="flex items-center">
                                                    {option.isAnwser ? (<CheckCircleIconSolid className={'btn-icon-7 bg-white text-success'}></CheckCircleIconSolid>)
                                                        : (<CheckCircleIcon className={'btn-icon-7 bg-white text-success'}></CheckCircleIcon>)}

                                                </label>
                                            </div>
                                            <CloseButton onClose={() => removeOption(optionIndex)}></CloseButton>
                                        </div>
                                        {(questionErr?.options?.[optionIndex] as FormikErrors<QuestionOption>)?.content && <div className="error-message">{(questionErr?.options?.[optionIndex] as FormikErrors<QuestionOption>)?.content}</div>}
                                    </div>
                                ))}
                            <div className="w-3/4 mt-4 btn-white-shadow hover:bg-gray-100" onClick={() => pushOption({ content: '', isAnwser: false })}>
                                Ajouter une réponse
                            </div>
                            {optionsError && <div className="error-message">{optionsError}</div>}
                        </div>
                    )}
                </FieldArray>
            </div>
        </div>
    )
}
export default QuizQuestionForm
