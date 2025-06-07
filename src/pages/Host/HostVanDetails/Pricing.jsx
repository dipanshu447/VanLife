import { useOutletContext } from "react-router-dom"

export default function Pricing(){
    const vandetail = useOutletContext();

    return (
        <div className='mt-5'>
            <span className="text-sm text-[#4D4D4D]"><b className="font-medium text-lg text-[#161616]">${vandetail.price.toFixed(2)}</b>/day</span>
        </div>
    )
}