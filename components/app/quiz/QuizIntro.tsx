const QuizIntro = () => {
    return (<>
        <div className="text-white text-2xl w-4/5 lg:w-3/5 mx-auto py-6">
            <h5 className="font-fat text-3xl mb-5">Bon à savoir</h5>
            <ul className="text-left list-disc px-12">
                <li>
                    Lorque vous validez une réponse; vous ne pouvez revenir en arrière
                </li>
                <li>
                    Plusieurs réponses peuvent êtres bonnes
                </li>
                <li>
                    Si vous quittez la partie en cours vous ne pourrez pas la reprendre
                </li>
            </ul>
        </div>
    </>)
}
export default QuizIntro
