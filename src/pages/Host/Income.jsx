import Bargraph from "../../components/Bargraph"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Dec 1, '22", id: "1" },
        { amount: 560, date: "Nov 10, '22", id: "2" },
        { amount: 980, date: "Nov 23, '22", id: "3" },
    ]

    const transactions = transactionsData.map(tran => (
        <div key={tran.id} className="flex items-center p-5 rounded-sm bg-white justify-between">
            <h2 className="font-bold text-2xl">${tran.amount}</h2>
            <p to="vans" className="text-sm text-[#4D4D4D] font-semibold">
                {new Date(tran.date).toLocaleDateString("en-GB",{
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit"
                })}
            </p>
        </div>
    ))

    return (
        <div className="pr-5">
            <div className="pl-5 mt-4 mb-8">
                <h1 className="text-2xl font-bold text-[#161616]">Income</h1>
                <div className="mt-4 text-[#4D4D4D] font-medium text-xs">Last <span className="font-bold underline">30 days</span></div>
                <div className="text-[#161616] mt-4 font-extrabold text-3xl">$2,260</div>
            </div>
            <Bargraph />
            <div className="my-8 box-border pl-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Your transactions (3)</h1>
                    <div className="text-[#4D4D4D] font-medium text-xs">Last <span className="font-bold underline">30 days</span></div>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {transactions}
                </div>
            </div>
        </div>
    )
}