import { useOutletContext } from "react-router-dom"

export default function Photos(){
    const vandetail = useOutletContext();

    return (
        <div className='mt-5'>
            <img className="max-w-[120px] object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={vandetail.imageUrl} alt={`Image of ${vandetail.name}`} />
        </div>
    )
}