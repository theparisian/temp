import Link from 'next/link'
import QuizContent from '../../components/app/quiz/QuizContent'
import siteConfig from '../../config/site'

const Questions = () => {
    return (
        <div className="bg-image text-white text-center min-h-screen flex flex-col">
            <header className="text-left text-xl bold cursor-pointer pl-6 pt-3 font-fat uppercase">
                <Link href={siteConfig.APPURL}>
                    &lt; &nbsp;Quiter
                </Link>
            </header>
            <QuizContent></QuizContent>
        </div>
    )
}
export default Questions