import Link from 'next/link'
import SessionResult from '../../components/app/quiz/SessionResult'
import siteConfig from '../../config/site'

const Result = () => {
    return (
        <div className="bg-image text-white text-center min-h-screen questions flex flex-col">
            <header className="text-left text-xl bold cursor-pointer pl-6 pt-3 font-fat uppercase">
                <Link href={siteConfig.APPURL}>
                    &lt; &nbsp;Quiter
                </Link>
            </header>
            <SessionResult></SessionResult>
        </div>
    )
}
export default Result