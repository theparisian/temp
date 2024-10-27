import React from 'react'
import { useSelector } from "react-redux";
import { selectQuizForm } from './quizFormSlice';
import { selectQuizList } from "./quizListSlice";

const QuizList = () => {
    const quizList = useSelector(selectQuizList)
    const quizForm = useSelector(selectQuizForm)
    return (
        <div className="mt-2 text-left flex-grow">
            {quizList.map((i, qi) => (
                <div className={'px-4 my-2 py-2 rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-xl min-h-20 ' + (i.selected? 'shadow-xl' : '' )} key={qi}>
                    <h5 className="text-xl font-fat">
                        {i.selected ? quizForm.title : i.quiz.title}
                    </h5>
                    <ul className="ml-5 text-sm">
                        {
                            (i.selected ? quizForm.questions : i.quiz?.questions.map(j => j.content))?.map((k, index) => (
                                <li key={index}>{k}</li>
                            ))
                        }
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default QuizList;
