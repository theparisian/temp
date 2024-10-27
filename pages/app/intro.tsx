import Link from "next/link"
import QuizIntro from "../../components/app/quiz/QuizIntro"
import siteConfig from '../../config/site'
const Intro = () => {
    return (
        <div className="bg-image text-white text-center min-h-screen flex flex-col">
            <header className="text-left text-xl bold cursor-pointer pl-6 pt-3 font-fat uppercase">
                <Link href={siteConfig.APPURL}>
                    &lt; &nbsp;Quiter
                </Link>
            </header>
            <main className="flex-grow flex flex-col justify-center">
                <QuizIntro></QuizIntro>
            </main>
            <footer>
                <Link href={siteConfig.APPURL + '/questions'}>
                    <div className="btn-app-footer uppercase cursor-pointer flex items-center text-white font-fat bg-blue-600">
                        <span className="mx-auto">J'ai compris!</span>
                    </div>
                </Link>
            </footer>
        </div>
    )
}
export default Intro