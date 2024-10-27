const ReturnButton = ({ onClick }: { onClick: () => void }) => (
    <div className="text-left text-xl bold cursor-pointer pl-6 pt-3 uppercase fixed left-0 top-0 text-white font-fat uppercase">
        <span onClick={onClick}>
            &lt; &nbsp;Retour
        </span>
    </div>
)

export default ReturnButton
