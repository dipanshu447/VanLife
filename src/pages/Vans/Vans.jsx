import '../../server.js';
import { useEffect, useState } from "react";
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function VanCard({ name, img, price, type }) {
    const typeStyles = clsx("text-[#FFEAD0] text-[11px] capitalize py-1 px-3.5 cursor-pointer rounded-md lg:text-sm", {
        "bg-[#E17654]": type == "simple",
        "bg-[#115E59]": type == "rugged",
        "bg-[#161616]": type == "luxury"
    });

    return (
        <div className="cursor-pointer">
            <img className="object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={img} alt={`Image of ${name}`} />
            <div className="flex justify-between mt-2">
                <div className="flex flex-col text-[#161616] font-semibold text-[14px] items-baseline gap-1 sm:text-[15px] md:text-base xl:text-xl">
                    {name}
                    <button className={typeStyles}>{type}</button>
                </div>
                <div className="flex flex-col text-[#161616] text-right">
                    <span className="font-semibold text-[14px] sm:text-[15px] md:text-base xl:text-xl">${price}</span>
                    <small className="font-medium text-[10px] leading-2 lg:text-[11px] xl:text-sm xl:leading-3">/day</small>
                </div>
            </div>
        </div>
    )
}

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, []);

    const allVans = vans.map(van => (
        <Link key={van.id} to={`/vans/${van.id}`} aria-label={`View details of ${van.name}, priced at $${van.price} per day`}>
            <VanCard name={van.name} img={van.imageUrl} price={van.price} type={van.type} />
        </Link>
    ));

    return (
        <div className="grow px-5 lg:px-6 flex flex-col gap-3 mt-3">
            <h1 className="text-[#161616] font-bold text-2xl md:text-3xl">Explore our van options</h1>
            <div className="flex items-center space-x-2 sm:justify-between">
                <div className="text-[#4D4D4D] text-[10px] sm:text-sm space-x-2 sm:space-x-4">
                    <button className="bg-[#FFEAD0] font-medium py-1.5 px-4 rounded-md cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:bg-[#E17654] hover:text-[#FFEAD0]">Simple</button>
                    <button className="bg-[#FFEAD0] font-medium py-1.5 px-4 rounded-md cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:bg-[#161616] hover:text-[#FFEAD0]">Luxury</button>
                    <button className="bg-[#FFEAD0] font-medium py-1.5 px-4 rounded-md cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:bg-[#115E59] hover:text-[#FFEAD0]">Rugged</button>
                </div>
                <a className="text-xs sm:text-sm text-[#4D4D4D] underline ml-5" href="#">Clear filters</a>
            </div>
            {vans.length > 0 ? <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 gap-x-6 gap-y-8 my-10">
                {allVans}
            </div> : <h3 className="mt-20 text-center text-xl">Loading....</h3>}
        </div>
    )
}