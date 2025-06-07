import { Link, useParams } from "react-router-dom";
import clsx from "clsx";
import '../../server.js';
import { useEffect, useState } from "react";

export default function VansDetails() {
    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.van))
    }, [params.id]);

    const typeStyles = clsx("text-[#FFEAD0] text-xs capitalize py-1.5 px-3.5 font-semibold cursor-pointer rounded-md lg:text-sm", {
        "bg-[#E17654]": van?.type == "simple",
        "bg-[#115E59]": van?.type == "rugged",
        "bg-[#161616]": van?.type == "luxury"
    });
    return (
        <div className="grow flex flex-col px-5">
            <Link to='..' relative="path">
                <div className="flex items-center gap-1 text-xs font-medium underline text-[#201F1D] lg:mb-6">
                    <img className="w-5 h-auto" src="https://img.icons8.com/?size=100&id=15815&format=png&color=858585" alt="leftarrow" />
                    <span className="cursor-pointer">Back to all vans</span>
                </div>
            </Link>
            <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:mb-5">
                {van ? (
                    <>
                        <img className="w-full lg:w-[35%] object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={van.imageUrl} alt={`Image of Modest Explorer`} />
                        <div className="grow flex flex-col mt-5 lg:mx-10">
                            <div className="grow">
                                <div className="flex flex-col text-[#161616] font-bold text-xl items-baseline gap-3 lg:gap-6 md:text-2xl lg:text-3xl">
                                    <button className={typeStyles}>{van.type}</button>
                                    {van.name}
                                </div>
                                <div className="text-[#161616] mt-2 lg:mt-4">
                                    <span className="font-bold text-xl md:text-2xl lg:text-3xl">${van.price}</span>
                                    <small className="font-medium text-sm lg:text-base">/day</small>
                                </div>
                                <p className="text-[#161616] text-sm mt-4 lg:mt-6 lg:text-base">{van.description}</p>
                            </div>
                            <button className='text-white mt-4 mb-8 lg:mb-0 lg:mt-8 transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] w-full font-semibold bg-[#FF8C38] p-2 rounded-sm cursor-pointer hover:scale-101 hover:translate-px'>Rent this van</button>
                        </div> </>) : <h3 className="mt-20 text-center text-xl">Loading....</h3>}
            </div>
        </div>
    )
}