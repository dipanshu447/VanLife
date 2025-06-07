import { useEffect, useState } from 'react';
import '../../server.js';
import { Link } from 'react-router-dom';

export default function HostVans() {
    const [hostvans, sethostvans] = useState([]);

    useEffect(() => {
        fetch('/api/host/vans/')
            .then((response) => response.json())
            .then((data) => sethostvans(data.vans))
    }, []);

    const hostVanCards = hostvans.map(van => (
        <Link key={van.id} to={`${van.id}`}>
            <div className="flex items-center gap-3 p-3 rounded-sm bg-white cursor-pointer">
                <img className="w-[20%] object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="flex flex-col">
                    <span className="text-[#161616] font-semibold">{van.name}</span>
                    <small className="text-[#4D4D4D] font-medium">${van.price}/day</small>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className="mt-8 box-border">
            <h1 className="text-2xl font-bold">Your listed vans</h1>
            {hostvans.length > 0 ? <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {hostVanCards}
            </div> : <h3 className="mt-20 text-center text-xl">Loading....</h3>}
        </div>
    )
}