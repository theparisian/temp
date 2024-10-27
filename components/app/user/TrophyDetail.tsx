const TrophyDetail = () => {
    return (
        <>
             <h1 className="uppercase text-xl font-bold">Mes trophées</h1>
             <div className="border-2 border-gray-300 rounded-3xl shadow w-5/6 lg:w-3/6 mx-auto mt-5">
                <div className="p-2 my-2 flex items-center">
                    <div className="mx-3">
                        star
                    </div>
                    <div className="leading-none text-left">
                        <div className="font-bold">
                            1 Place offerte!
                        </div>
                        <div className="font-light">
                            Valable jusqu'au 30.03.2020
                        </div>
                    </div>
                </div>
                <div className="text-left pl-5">
                    Conditions .......... ...
                    <br></br>
                    qrcode
                </div>
            </div>
        </>)
};
export default TrophyDetail
