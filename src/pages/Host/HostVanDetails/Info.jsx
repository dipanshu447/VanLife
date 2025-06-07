import { useOutletContext } from "react-router-dom"

export default function Info() {
    const vandetail = useOutletContext();

    return (
        <div className='mt-5 flex flex-col gap-2 text-[12.5px] sm:text-sm md:text-base md:gap-3 xl:text-lg xl:gap-4'>
            <span><b>Name:</b> {vandetail.name}</span>
            <span className="capitalize"><b>Category:</b> {vandetail.type}</span>
            <p><b>Description:</b> {vandetail.description}</p>
            <span><b>Visibility:</b> Public</span>
        </div>
    )
}