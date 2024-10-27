import Link from 'next/link'
import CodeInput from '../../components/app/quiz/CodeInput'
import siteConfig from '../../config/site'

const Code = () => {
    return (
        <div className="bg-image text-white text-center min-h-screen flex flex-col">
            <header className="text-left text-xl bold cursor-pointer pl-6 pt-3 font-fat uppercase">
                <Link href={siteConfig.APPURL}>
                    &lt; &nbsp;Quiter
                </Link>
            </header>
            <main className="flex-grow flex flex-col justify-center">
                <CodeInput></CodeInput>
            </main>
            <footer>
                 <Link href={siteConfig.APPURL + '/intro'}>
                    <div className="btn-app-footer uppercase cursor-pointer flex items-center text-white font-fat bg-blue-600">
                        <span className="mx-auto">GO</span>
                    </div>
                </Link>
            </footer>
        </div>
    )
}
export default Code