import { useCallback, useEffect, useRef, useState } from 'react'
import { QuestionOption } from '../../../models/quiz/questionOption'
import { sampleQuizSession } from '../../../sample-data'
import { useRouter } from '../../shared/utils/useRouter'
import styles from './QuizContent.module.css'
import siteConfig from '../../../config/site'

const Timer = ({max, onTimeOut, resetTrigger}: {max: number, onTimeOut: () => void, resetTrigger: number}) => {
    const [timer, setTimer] = useState(max)
    useEffect(() => {
        setTimer(max)
    }, [resetTrigger])
    useEffect(() => {
        const iid = setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
        return () => clearInterval(iid)
    }, []);
    useEffect(() => {
        if (timer < 1) {
            onTimeOut()
        }
    }, [timer])
    return <div className={styles.compteur + ' block font-bold text-center'}>0:{timer.toString().padStart(2, '0')}</div>
}

const QuizContent = () => {
    const v = useRef({qs: sampleQuizSession})
    const router = useRouter()
    const [question, setQuestion] = useState(v.current.qs.questions[0])
    const [timerResetTrigger, setTimerResetTriger] = useState(Date.now())
    const onSelectCallback = useCallback((index: number) => {
        const { qs } = v.current
        question.answer = question.answer || []
        if (question.answer.includes(index)) {
            question.answer = question.answer.filter(i => i !== index)
        } else {
            question.answer.push(index)
        }
        const i = qs.questions.findIndex(i => i.id === question.id)
        qs.questions[i] = { ...question }
        setQuestion(qs.questions[i])
    }, [question])
    const onValidate = () => {
        const { qs } = v.current
        const i = qs.questions.findIndex(i => i.id === question.id)
        if (i < qs.questions.length - 1) {
            setQuestion(qs.questions[i + 1])
            setTimerResetTriger(Date.now())
        } else {
            router.push(siteConfig.APPURL + '/result')
        }
    }
    return (<>
        <main className="flex-grow flex flex-col pt-6">
            <div className="text-white text-2xl rounded-lg w-4/5 lg:w-3/5 mx-auto">
                <div className="font-bluepen text-6xl d-block font-weight-bold text-center pt-5 pb-2">{question.content[0].content}</div>
                <Timer max={30} onTimeOut={onValidate} resetTrigger={timerResetTrigger}></Timer>
                <ul className={styles.questions + ' w-full'}>
                    {question.options.map((option: QuestionOption, index: number) =>
                        <li key={index} className={question.answer && question.answer.includes(index) ? styles.active + ' ' + styles.selected : styles.active}
                            onClick={() => onSelectCallback(index)}>
                            <div className={styles.check + ' flex items-center justify-center'}>
                                <img src="/images/check.svg" />
                            </div>
                            <input type="checkbox"></input>
                            <label>{option.content}</label>
                        </li>)}
                </ul>
            </div>
        </main>
        <footer>
            <div className="btn-app-footer uppercase cursor-pointer flex items-center text-white font-fat bg-blue-600" onClick={onValidate}>
                <span className="mx-auto">Valider</span>
            </div>
        </footer>
    </>)
}
export default QuizContent
